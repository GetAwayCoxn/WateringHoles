# Generated by Django 4.2 on 2023-04-25 23:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0002_remove_core_user_user_name_alter_core_user_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='core_user',
            name='bio',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='core_user',
            name='dob',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='core_user',
            name='last_updated',
            field=models.DateField(auto_now=True),
        ),
    ]
