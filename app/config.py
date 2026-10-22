from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    # Meta WhatsApp API
    META_API_VERSION: str = "v20.0"
    WHATSAPP_TOKEN: str = "your_token"
    PHONE_NUMBER_ID: str = "your_phone_number_id"
    VERIFY_TOKEN: str = "my_secure_store_webhook_token_123"

    # Store Metadata
    STORE_NAME: str = "Rishabh Communications"
    STORE_TAGLINE: str = "Authorized Mobile & Flagship Electronics Boutique"
    STORE_PHONE: str = "+91 98980 64467"
    STORE_ADDRESS: str = "GF-2, Rutukalash Complex, Tulsidham Cross Road, GIDC Industrial Area, Manjalpur, Vadodara, Gujarat 390011"
    STORE_MAP_LINK: str = "https://maps.google.com/?q=Rishabh+Communications+Manjalpur+Vadodara"
    STORE_HOURS: str = "Open Daily: 10:00 AM - 10:00 PM"
    STORE_UPI_ID: str = "9898064467@upi"

    # Database
    DATABASE_URL: str = "sqlite:///./store.db"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

@lru_cache()
def get_settings() -> Settings:
    return Settings()
