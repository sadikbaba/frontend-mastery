from django.conf import settings
from django.db import models


# Create your models here.

class Application(models.Model):
    # user  = models.ForeignKey(
    #     settings.AUTH_USER_MODEL,
    #     on_delete=models.CASCADE,
    #     related_name='applications'
    # )

    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.company} {self.role} {self.status}"