# Generated by Django 4.0.1 on 2022-01-25 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='age',
            field=models.IntegerField(default=None),
        ),
        migrations.AddField(
            model_name='author',
            name='city',
            field=models.CharField(default=None, max_length=225),
        ),
        migrations.AddField(
            model_name='author',
            name='salary',
            field=models.CharField(default=None, max_length=60),
        ),
        migrations.AlterField(
            model_name='author',
            name='name',
            field=models.CharField(max_length=225),
        ),
        migrations.DeleteModel(
            name='Entry',
        ),
    ]
