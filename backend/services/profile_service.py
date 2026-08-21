from config.supabase import supabase


def get_profile(user_id):

    response = (
        supabase
        .table("profiles")
        .select("*")
        .eq("id", user_id)
        .single()
        .execute()
    )

    return response.data

def get_user_role(user_id):

    response = (
        supabase
        .table("profiles")
        .select("role")
        .eq("id", user_id)
        .single()
        .execute()
    )

    if not response.data:
        raise Exception("User profile not found")

    return response.data["role"]

def update_profile(user_id, data):

    allowed_fields = [
        "full_name",
        "avatar_url",
        "phone",
        "city",
        "state",
        "bio"
    ]

    update_data = {
        key: value
        for key, value in data.items()
        if key in allowed_fields
    }

    if not update_data:
        raise Exception("No valid profile fields provided")

    response = (
        supabase
        .table("profiles")
        .update(update_data)
        .eq("id", user_id)
        .execute()
    )

    return response.data