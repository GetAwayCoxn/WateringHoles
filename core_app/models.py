from django.db import models
from django.contrib.auth.models import AbstractUser


class Core_User(AbstractUser):
    username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50, null=True)
    last_name = models.CharField(max_length=50, null=True)
    email = models.EmailField(max_length=254, unique=True)
    dob = models.DateField(null=True)
    last_updated = models.DateField(auto_now=True)
    date_created = models.DateField(auto_now_add=True)
    bio = models.TextField(null=True)
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]
    

    def __str__(self):
        return f"Username: {self.username} Email: {self.email}"


class Favorite(models.Model):
    brewery_id = models.CharField(max_length=255)
    user = models.ForeignKey(Core_User, on_delete=models.CASCADE, related_name="favorites")