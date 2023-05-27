from django.contrib import admin
from core_app.models import Core_User, Brewery, Favorite

admin.site.register(Core_User)
admin.site.register(Brewery)
admin.site.register(Favorite)