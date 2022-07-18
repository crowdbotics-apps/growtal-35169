from django.db import models
from users.models import User


class Feedback(models.Model):
    subject = models.CharField(max_length=100)
    body = models.TextField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.subject
