from functools import wraps

from flask import request

from services.auth_service import get_current_user
from services.profile_service import get_user_role

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


def auth_required(function):

    @wraps(function)
    def wrapper(*args, **kwargs):

        try:

            user = require_auth()

            return function(user, *args, **kwargs)

        except Exception as e:

            from flask import jsonify

            return jsonify({
                "error": str(e)
            }), 401

    return wrapper

def role_required(*allowed_roles):

    def decorator(function):

        @wraps(function)
        def wrapper(user, *args, **kwargs):

            try:

                role = get_user_role(user.id)

                if role not in allowed_roles:

                    from flask import jsonify

                    return jsonify({
                        "error": "You do not have permission to access this resource"
                    }), 403

                return function(user, *args, **kwargs)

            except Exception as e:

                from flask import jsonify

                return jsonify({
                    "error": str(e)
                }), 401

        return wrapper

    return decorator