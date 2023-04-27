from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json
from .models import Core_User, Favorite, Brewery


@api_view(["POST"])
def register_user(request):
    # Handle creating new user, this will change in time as the user model grows for more profile information
    username = request.data["username"]
    email = request.data["email"]
    password = request.data["password"]
    super_user = False
    staff = False
    if "super" in request.data:
        super_user = request.data["super"]
    if "staff" in request.data:
        staff = request.data["staff"]
    # Return JSON obj with only key as 'username' to be either the username or None for proper state handling in react
    try:
        new_user = Core_User.objects.create_user(
            username=username,
            email=email,
            password=password,
            is_superuser=super_user,
            is_staff=staff,
        )
        new_user.save()
        return JsonResponse({"username": username})
    except Exception as e:
        print(e)
        return JsonResponse({"username": None})
    

@api_view(["POST"])
def update_user(request):
    # Get the user
    username = request.data["username"]
    curr_user = Core_User.objects.get(username=username)
    # Update the user
    try:
        curr_user.bio = request.data["bio"]
        curr_user.email = request.data["email"]
        curr_user.first_name = request.data["first"]
        curr_user.last_name = request.data["last"]
        if request.data["currPassword"]:
            password = request.data["currPassword"]
            user = authenticate(username=username, password=password)
            if user is not None and user.is_active:
                curr_user.set_password(request.data["newpassword"])
        curr_user.save()
        return JsonResponse({"success": True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    

@api_view(["POST"])
def add_favorite(request):
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields=["username"])
        user_info_workable = json.loads(user_info)
        curr_user = Core_User.objects.get(username=user_info_workable[0]["fields"]["username"])
        try:
            request_id = request.data.get("id")
            brewery = Brewery.objects.filter(brewery_id=request_id)
            if len(brewery) == 0:
                Brewery.objects.create(
                    brewery_id=request.data.get("id"),
                    name=request.data.get("name"),
                    website_url=request.data.get("website_url"),
                    phone=request.data.get("phone"),
                    address_1=request.data.get("address_1"),
                    city=request.data.get("city"),
                    state_province=request.data.get("state_province"),
                    postal_code=request.data.get("postal_code"),
                    country=request.data.get("country"),
                    longitude=request.data.get("longitude"),
                    latitude=request.data.get("latitude"),
                    state=request.data.get("state"),
                )
            curr_brew = Brewery.objects.get(brewery_id=request_id)
            brew_id = curr_brew.id
            curr_id = curr_user.id
            fav = Favorite.objects.filter(brewery_id=brew_id, user_id=curr_id)
            if len(fav) == 0:
                try:
                    Favorite.objects.create(brewery_id=brew_id, user_id=curr_id)
                    return JsonResponse({"success": True, "added": True})
                except Exception as e:
                    return JsonResponse({"success": True, "added": False})
        except Exception as e:
            print(e)
            return JsonResponse({"success": False})
    return JsonResponse({"success": False})


@api_view(["POST"])
def user_login(request):
    # Handle login
    username = request.data["username"]
    password = request.data["password"]
    user = authenticate(username=username, password=password)
    if user is not None and user.is_active:
        # Return JSON obj with only key as 'username' to be either the username or None for proper state handling in react
        try:
            login(request._request, user)
            return JsonResponse({"username": user.username})
        except Exception as e:
            print(e)
            return JsonResponse({"username": None})
    return JsonResponse({"username": None})


@api_view(["POST"])
def user_logout(request):
    # Handle logout
    try:
        logout(request)
        return JsonResponse({"success": True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})


@api_view(["GET"])
def show_user(request):
    # Parse the user data to readable format, could add some user auth/validation here later
    # Return JSON obj with only key as 'username' to be either the username or None for proper state handling in react
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields=["username"])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]["fields"])
    return JsonResponse({"username": None})


@api_view(["GET"])
def user_profile(request, username):
    # Fetch user profile data from the database
    data = Core_User.objects.get(username=username)
    user = {
        "username" : data.username,
        "email" : data.email,
        "first_name": data.first_name,
        "last_name": data.last_name,
        "bio" : data.bio,
        "dob" : data.dob,
        "last_updated" : data.last_updated,
        "date_created" : data.date_created,
    }
    return JsonResponse(user)


# Serve the react app
@api_view(["GET"])
def home(request):
    # Get the index for the react app
    file = open("static/index.html")
    # Read it to a variable
    resp = file.read()
    # So we can then responsibly close the file and serve the app
    file.close()
    return HttpResponse(resp)


@api_view(["GET"])
def error(request):
    # Serve custom error page from the backend for all unhandled url requests
    return render(request, "error.html")
