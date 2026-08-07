from flask import request

from services.auth_service import get_current_user


def require_auth():

    auth_header = request.headers.get("Authorization")

    if not auth_header:
        raise Exception("Authorization header is required")

    if not auth_header.startswith("Bearer "):
        raise Exception("Invalid Authorization header")

    access_token = auth_header[7:].strip()

    if not access_token:
        raise Exception("Access token is required")

    response = get_current_user(access_token)

    if not response.user:
        raise Exception("Invalid or expired access token")

    return response.user