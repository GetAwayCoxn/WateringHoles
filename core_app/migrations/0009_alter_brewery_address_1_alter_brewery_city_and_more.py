# Generated by Django 4.2 on 2023-04-27 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0008_brewery_alter_favorite_brewery_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brewery',
            name='address_1',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='country',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='latitude',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='longitude',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='phone',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='postal_code',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='state',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='state_province',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='brewery',
            name='website_url',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
