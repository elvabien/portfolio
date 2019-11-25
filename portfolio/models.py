from django.db import models


class Person(models.Model):
  email = models.EmailField()
  subject = models.CharField(max_length=100)
  message = models.CharField(max_length=220)
