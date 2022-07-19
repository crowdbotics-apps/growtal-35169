from django.contrib import admin
from .models import Refer
# Register your models here.


class ReferAdmin(admin.ModelAdmin):
    list_display = ['referral_type', 'name', 'application_link', 'date']

    class Meta:
        model = Refer
        fields = '__all__'


admin.site.register(Refer, ReferAdmin)

