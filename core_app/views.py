from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json
from .models import Core_User


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
    # Return either the username or None for proper state handling in react
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
def user_login(request):
    # Handle login
    username = request.data["username"]
    password = request.data["password"]
    user = authenticate(username=username, password=password)
    if user is not None and user.is_active:
        # Return either the username or None for proper state handling in react
        try:
            login(request._request, user)
            print(user)
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
    # Return either the username or None for proper state handling in react
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields=["username"])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]["fields"])
    return JsonResponse({"username": None})


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
