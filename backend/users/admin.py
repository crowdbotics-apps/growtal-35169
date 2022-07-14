from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from .models import UserExpertise, Profile
from users.forms import UserChangeForm, UserCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (
                    ("User", {"fields": ("name", "user_type", "approve", "profile_picture")}),
                ) + auth_admin.UserAdmin.fieldsets
    list_display = ["id", "email", "name", "is_superuser", "approve"]
    search_fields = ["name", "email"]


admin.site.register(UserExpertise)
admin.site.register(Profile)
