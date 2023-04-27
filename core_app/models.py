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
    

class Brewery(models.Model):
    brewery_id = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=100)
    website_url = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    address_1 = models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100, null=True)
    state_province = models.CharField(max_length=100, null=True)
    postal_code = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=100, null=True)
    longitude = models.CharField(max_length=100, null=True)
    latitude = models.CharField(max_length=100, null=True)
    state = models.CharField(max_length=100, null=True)

    def __str__(self):
        return f"Brewery Model for {self.name}"
    

class Favorite(models.Model):
    brewery = models.ForeignKey(Brewery, on_delete=models.CASCADE)
    user = models.ForeignKey(Core_User, on_delete=models.CASCADE, related_name="favorites")

    def __str__(self):
        return f"Favorite Model User_id:{self.user_id}"