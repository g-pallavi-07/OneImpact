from flask import Blueprint, request, jsonify

from services.auth_service import (
    signup_user,
    login_user,
    get_current_user,
    refresh_user_session,
    get_user_profile,
    logout_user
)

from utils.auth import (
    require_auth,
    auth_required,
    role_required
)
from services.profile_service import get_profile

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/signup", methods=["POST"])
def signup():

    data = request.get_json()

    if not data:
        return jsonify({
            "error": "Request body is required"
        }), 400

    email = data.get("email")
    password = data.get("password")
    full_name = data.get("full_name")

    if not full_name:
        return jsonify({
            "error": "Full name is required"
        }), 400
    

    if not email:
        return jsonify({
            "error": "Email is required"
        }), 400

    if not password:
        return jsonify({
            "error": "Password is required"
        }), 400

    if len(password) < 8:
        return jsonify({
            "error": "Password must be at least 8 characters"
        }), 400

    try:

        response = signup_user(
            full_name,
            email,
            password
        )

        return jsonify({
            "message": "Signup successful"
        }), 201

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400

@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    if not data:
        return jsonify({
            "error": "Request body is required"
        }), 400

    email = data.get("email")
    password = data.get("password")

    if not email:
        return jsonify({
            "error": "Email is required"
        }), 400

    if not password:
        return jsonify({
            "error": "Password is required"
        }), 400

    try:

        response = login_user(
            email,
            password
        )

        session = response.session
        user = response.user

        profile = get_user_profile(user.id)

        return jsonify({
            "message": "Login successful",

            "user": {
                "id": user.id,
                "email": user.email
            },

            "profile": profile,

            "session": {
                "access_token": session.access_token,
                "refresh_token": session.refresh_token
            }
        }), 200

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 401

@auth_bp.route("/me", methods=["GET"])
def me():

    try:

        user = require_auth()

        profile = get_profile(user.id)

        return jsonify({
            "user": {
                "id": user.id,
                "email": user.email
            },
            "profile": profile
        }), 200

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 401

@auth_bp.route("/refresh", methods=["POST"])
def refresh():

    data = request.get_json()

    if not data:
        return jsonify({
            "error": "Request body is required"
        }), 400

    refresh_token = data.get("refresh_token")

    if not refresh_token:
        return jsonify({
            "error": "Refresh token is required"
        }), 400

    try:

        response = refresh_user_session(refresh_token)

        session = response.session

        return jsonify({
            "message": "Token refreshed successfully",
            "session": {
                "access_token": session.access_token,
                "refresh_token": session.refresh_token
            }
        }), 200

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 401

@auth_bp.route("/protected-test", methods=["GET"])
@auth_required
def protected_test(user):

    return jsonify({
        "message": "Authentication successful",
        "user_id": user.id,
        "email": user.email
    }), 200

@auth_bp.route("/logout", methods=["POST"])
def logout():

    try:

        logout_user()

        return jsonify({
            "message": "Logout successful"
        }), 200

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400

