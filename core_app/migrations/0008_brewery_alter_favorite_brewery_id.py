# Generated by Django 4.2 on 2023-04-27 15:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0007_rename_user_id_favorite_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brewery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brewery_id', models.CharField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('website_url', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
                ('address_1', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('state_province', models.CharField(max_length=100)),
                ('postal_code', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('longitude', models.CharField(max_length=100)),
                ('latitude', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name='favorite',
            name='brewery_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core_app.brewery'),
        ),
    ]
