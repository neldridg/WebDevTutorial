from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Pic(models.Model):
    image = models.ImageField(upload_to='cats')
    uploaded_date = models.DateTimeField(auto_now=True, null=False)
