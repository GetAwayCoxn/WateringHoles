# Generated by Django 4.2 on 2023-04-27 15:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0006_favorite'),
    ]

    operations = [
        migrations.RenameField(
            model_name='favorite',
            old_name='user_id',
            new_name='user',
        ),
    ]