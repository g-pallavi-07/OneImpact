from flask import Blueprint, request, jsonify

from utils.auth import require_auth
from services.profile_service import (
    get_profile,
    update_profile
)


profile_bp = Blueprint("profile", __name__)

@profile_bp.route("/", methods=["GET"])
def profile():

    try:

        user = require_auth()

        profile = get_profile(user.id)

        return jsonify({
            "profile": profile
        }), 200

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 401

@profile_bp.route("/", methods=["PUT"])
def update_user_profile():

    try:

        user = require_auth()

        data = request.get_json()

        if not data:
            return jsonify({
                "error": "Request body is required"
            }), 400

        updated_profile = update_profile(
            user.id,
            data
        )

        return jsonify({
            "message": "Profile updated successfully",
            "profile": updated_profile
        }), 200

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 401