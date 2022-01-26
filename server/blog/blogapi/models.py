from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=225)
    age = models.IntegerField(default=None)
    salary = models.CharField(max_length=60, default=None)
    city = models.CharField(default=None, max_length=225)