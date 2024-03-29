"""
URL configuration for core_app.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, re_path
from . import views

urlpatterns = [
    path("", views.home),
    path("register/", views.register_user),
    path("update/", views.update_user),
    path("login/", views.user_login),
    path("logout/", views.user_logout),
    path("user/", views.show_user),
    path("add/", views.add_favorite),
    path("delete/", views.delete_favorite),
    path("favorites/", views.get_favorites),
    path("profile/<str:username>", views.user_profile),
    re_path(r'.*', views.error),
]
