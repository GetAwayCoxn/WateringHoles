from django.db import models
from django.contrib.auth.models import AbstractUser


class Core_User(AbstractUser):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return f"Username: {self.username} Email: {self.email}"

