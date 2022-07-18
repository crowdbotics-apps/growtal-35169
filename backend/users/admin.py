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
                    ("User", {"fields": ("name", "user_type", "profile_picture")}),
                    ("Approve status", {"fields": ("approve",)}),
                ) + auth_admin.UserAdmin.fieldsets
    list_display = ["id", "email", "name", "is_superuser", "user_type", "approve"]
    search_fields = ["name", "email"]


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'user_type', 'hourly_rate', 'weekly_availability', 'verified']
    search_fields = ["weekly_availability", "verified", "hourly_rate"]

    def user_type(self, obj):
        return obj.user.user_type

    class Meta:
        model = Profile
        fields = '__all__'


admin.site.register(UserExpertise)
admin.site.register(Profile, ProfileAdmin)
