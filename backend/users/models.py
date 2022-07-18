from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from django_rest_passwordreset.signals import reset_password_token_created


class UserExpertise(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    USER_TYPE = (
        ('Expert', 'Expert'),
        ('Business', 'Business')
    )
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    user_type = models.CharField(max_length=10, choices=USER_TYPE, null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    linkedin_profile_url = models.URLField(max_length=500, null=True, blank=True)
    approve = models.BooleanField(default=False)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class Profile(models.Model):
    AVAILABILITY = (
        ('10-20 hours per week', '10-20 hours per week'),
        ('30-40 hours per week', '30-40 hours per week'),
        ('40+ hours per week', '40+ hours per week')
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    resume = models.FileField(upload_to='user_resume/')
    hourly_rate = models.FloatField()
    expert_bio = models.TextField(max_length=800)
    weekly_availability = models.CharField(max_length=30, choices=AVAILABILITY)
    vertical_section = models.ManyToManyField(UserExpertise, related_name='vertical')
    primary_expertise = models.ManyToManyField(UserExpertise, related_name='primary')
    secondary_expertise = models.ManyToManyField(UserExpertise, related_name='secondary')
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.name


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """
    # send an e-mail to the user
    context = {
        'name': reset_password_token.user.name,
        'reset_password_url': "{}confirm/?token={}".format(
            instance.request.build_absolute_uri(),
            urlsafe_base64_encode(force_bytes(reset_password_token.key)))
    }

    # render email text
    email_html_message = render_to_string('email/user_reset_password.html', context)
    email_plaintext_message = render_to_string('email/user_reset_password.txt', context)

    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Growtal"),
        # message:
        email_plaintext_message,
        # from:
        "team@growtal.com",
        # to:
        [reset_password_token.user.email]
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()
