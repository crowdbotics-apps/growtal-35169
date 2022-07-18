from django.contrib import admin
from .models import Feedback


# Register your models here.


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'subject']

    class Meta:
        model = Feedback
        fields = '__all__'


admin.site.register(Feedback, FeedbackAdmin)
