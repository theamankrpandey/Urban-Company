from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(User)
admin.site.register(Service)
admin.site.register(Category)
admin.site.register(Address)
admin.site.register(Vendor)
admin.site.register(Booking)
admin.site.register(Review)
admin.site.register(Payment)
admin.site.register(SubscriptionPlan)
admin.site.register(VendorSubscription)
