from django.db import models
from users.models import User
# Create your models here.


class Refer(models.Model):
    USER_TYPE = (
        ('Expert', 'Expert'),
        ('Business', 'Business')
    )
    referral_type = models.CharField(max_length=10, choices=USER_TYPE,)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    application_link = models.URLField(max_length=500)
    description = models.TextField(max_length=1000)
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "referrals"
