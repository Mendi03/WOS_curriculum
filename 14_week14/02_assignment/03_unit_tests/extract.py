import requests
from requests.exceptions import HTTPError
from utilities.console import error, info, success


def extract(url: str, access_token: str) -> dict | None:
    """Fetches data from the API and returns the raw data (JSON/list)."""

    # Token not required for this endpoint; included for demonstration purposes
    headers = {"Authorization": f"Bearer {access_token}"}

    try:
        print(info(f"Fetching data from {url}..."))
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        print(success("Data retrieved successfully."))
        return response.json()

    except HTTPError as e:
        print(error(f"HTTP error occurred: {e}"))
        return None
    except Exception as e:
        print(error(f"Unexpected error occurred: {e}"))
        return None
