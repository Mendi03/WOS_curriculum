from termcolor import colored


def error(message: str) -> str:
    """Return the provided message string colored red for error output."""
    return colored(message, "red")


def info(message: str) -> str:
    """Return the provided message string colored light blue for informational output."""
    return colored(message, "light_blue")


def success(message: str) -> str:
    """Return the provided message string colored green for successful output."""
    return colored(message, "green")
