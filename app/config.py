from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    # Meta WhatsApp API
    META_API_VERSION: str = "v20.0"
    WHATSAPP_TOKEN: str = "your_token"
    PHONE_NUMBER_ID: str = "your_phone_number_id"
    VERIFY_TOKEN: str = "my_secure_store_webhook_token_123"

    # Store Metadata
    STORE_NAME: str = "Rishabh Communication"
    STORE_TAGLINE: str = "Authorized Tier-1 Flagship Tech Boutique"
    STORE_PHONE: str = "+91 98765 43210"
    STORE_ADDRESS: str = "Shop #4, Luxury Galleria, Ground Level, Tech Square"
    STORE_MAP_LINK: str = "https://maps.google.com/?q=Rishabh+Communication"
    STORE_HOURS: str = "Mon - Sat: 10:30 AM - 9:30 PM | Sunday: 11:00 AM - 7:00 PM"
    STORE_UPI_ID: str = "rishabhcomm@upi"

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
