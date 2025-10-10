import os
from dotenv import load_dotenv
from utilities.console import error


def get_vars() -> str | None:
    """Load environment variables and return the access token, with error handling."""
    try:
        load_dotenv()
        access_token = os.environ.get("ACCESS_TOKEN")
        if not access_token:
            raise ValueError(error("ACCESS_TOKEN not found in environment variables."))
        return access_token
    except Exception as e:
        print(f"{error('Error loading environment variables')}: {e}")
        return None
