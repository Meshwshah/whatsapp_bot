import logging
import httpx
from typing import List, Dict, Any, Optional
from app.config import get_settings

logger = logging.getLogger("whatsapp_client")
settings = get_settings()

class WhatsAppClient:
    def __init__(self):
        self.api_version = settings.META_API_VERSION
        self.phone_number_id = settings.PHONE_NUMBER_ID
        self.token = settings.WHATSAPP_TOKEN
        self.base_url = f"https://graph.facebook.com/{self.api_version}/{self.phone_number_id}/messages"
        self.headers = {
            "Authorization": f"Bearer {self.token}",
            "Content-Type": "application/json"
        }

    def is_configured(self) -> bool:
        """Check if production Meta credentials are set up."""
        return bool(
            self.token
            and self.phone_number_id
            and not self.token.startswith("your_")
            and not self.phone_number_id.startswith("your_")
        )

    async def _post_payload(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Send JSON payload to Meta Graph API or log if unconfigured."""
        if not self.is_configured():
            logger.info("[MOCK WHATSAPP OUTBOUND] Message to %s: %s", payload.get("to"), payload)
            return {"status": "mock_delivered", "payload": payload}

        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.post(self.base_url, headers=self.headers, json=payload)
                response_data = response.json()
                if response.status_code >= 400:
                    logger.error("Meta Graph API error [%s]: %s", response.status_code, response_data)
                return response_data
        except Exception as e:
            logger.error("Failed to deliver message via WhatsApp API: %s", e)
            return {"error": str(e)}

    async def send_text(self, to: str, text: str, preview_url: bool = False) -> Dict[str, Any]:
        """Send a standard text message."""
        payload = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": to,
            "type": "text",
            "text": {
                "preview_url": preview_url,
                "body": text
            }
        }
        return await self._post_payload(payload)

    async def send_interactive_buttons(
        self,
        to: str,
        body_text: str,
        buttons: List[Dict[str, str]],
        header_text: Optional[str] = None,
        footer_text: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Send an interactive message with up to 3 quick-reply buttons.
        Each button in `buttons` is a dict: {"id": "btn_id", "title": "Btn Label"}.
        Title is capped at 20 characters by Meta.
        """
        # Meta allows maximum 3 buttons
        safe_buttons = []
        for b in buttons[:3]:
            title = b["title"][:20]  # Enforce 20 chars limit
            safe_buttons.append({
                "type": "reply",
                "reply": {
                    "id": b["id"],
                    "title": title
                }
            })

        interactive: Dict[str, Any] = {
            "type": "button",
            "body": {"text": body_text},
            "action": {"buttons": safe_buttons}
        }

        if header_text:
            interactive["header"] = {"type": "text", "text": header_text}
        if footer_text:
            interactive["footer"] = {"text": footer_text}

        payload = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": to,
            "type": "interactive",
            "interactive": interactive
        }
        return await self._post_payload(payload)

    async def send_interactive_list(
        self,
        to: str,
        body_text: str,
        button_text: str,
        sections: List[Dict[str, Any]],
        header_text: Optional[str] = None,
        footer_text: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Send an interactive list message.
        `sections`: [
            {
                "title": "Category Title",
                "rows": [{"id": "...", "title": "...", "description": "..."}]
            }
        ]
        Meta limits: button_text <= 20 chars, row title <= 24 chars, description <= 72 chars.
        Total rows across all sections <= 10.
        """
        total_rows = 0
        safe_sections = []
        for sec in sections:
            safe_rows = []
            for row in sec.get("rows", []):
                if total_rows >= 10:
                    break
                safe_row = {
                    "id": row["id"],
                    "title": row["title"][:24]
                }
                if row.get("description"):
                    safe_row["description"] = row["description"][:72]
                safe_rows.append(safe_row)
                total_rows += 1

            if safe_rows:
                safe_sections.append({
                    "title": sec.get("title", "Options")[:24],
                    "rows": safe_rows
                })

        interactive: Dict[str, Any] = {
            "type": "list",
            "body": {"text": body_text},
            "action": {
                "button": button_text[:20],
                "sections": safe_sections
            }
        }

        if header_text:
            interactive["header"] = {"type": "text", "text": header_text}
        if footer_text:
            interactive["footer"] = {"text": footer_text}

        payload = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": to,
            "type": "interactive",
            "interactive": interactive
        }
        return await self._post_payload(payload)

    async def send_location(
        self,
        to: str,
        latitude: float,
        longitude: float,
        name: str,
        address: str
    ) -> Dict[str, Any]:
        """Send a physical store location pin."""
        payload = {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": to,
            "type": "location",
            "location": {
                "latitude": latitude,
                "longitude": longitude,
                "name": name,
                "address": address
            }
        }
        return await self._post_payload(payload)

# Singleton client instance
whatsapp_client = WhatsAppClient()
