# Generated by Django 4.2 on 2023-04-27 16:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0009_alter_brewery_address_1_alter_brewery_city_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='favorite',
            old_name='brewery_id',
            new_name='brewery',
        ),
    ]
