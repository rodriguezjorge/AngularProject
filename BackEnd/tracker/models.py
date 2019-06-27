from django.db import models

# Create your models here.
class Expenses(models.Model):
    # ID, Name, Speaker, Venue, Duration
    description = models.CharField(max_length=100)
    amount = models.PositiveIntegerField()
    types = models.CharField(max_length=100)
    date =models.DateField(auto_now=False, auto_now_add=False)
