from config.supabase import supabase


def signup_user(full_name, email, password):

    response = supabase.auth.sign_up({
        "email": email,
        "password": password,
        "options": {
            "data": {
                "full_name": full_name
            }
        }
    })

    return response

def login_user(email, password):

    response = supabase.auth.sign_in_with_password({
        "email": email,
        "password": password
    })

    return response

def get_current_user(access_token):

    response = supabase.auth.get_user(access_token)

    return response

def refresh_user_session(refresh_token):

    response = supabase.auth.refresh_session(refresh_token)

    return response

def get_user_profile(user_id):

    response = (
        supabase
        .table("profiles")
        .select("*")
        .eq("id", user_id)
        .single()
        .execute()
    )

    return response.data

def logout_user():

    response = supabase.auth.sign_out()

    return response