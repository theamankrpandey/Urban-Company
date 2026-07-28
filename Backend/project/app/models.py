from django.db import models
from cloudinary.models import CloudinaryField
from django.utils import timezone
from datetime import timedelta
# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=15)
    phone = models.CharField(max_length=10)
    address = models.TextField()
    city = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (self.username)
    

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Service(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name="services")
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = CloudinaryField("image",null=True,blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    duration = models.IntegerField(help_text="Duration in minutes")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Address(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="addresses")
    house_no = models.CharField(max_length=100)
    area = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    landmark = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.user.username + " Address"


class Vendor(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=10)
    address = models.TextField()
    city = models.CharField(max_length=100)
    profile_image = CloudinaryField("image",null=True,blank=True)
    experience = models.IntegerField(help_text="Experience in years")
    Vendor_is_available = models.BooleanField(default=True)
    Vendor_is_Unavailable = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class VendorKYC(models.Model):
    vendor = models.OneToOneField(Vendor,on_delete=models.CASCADE)
    id_proof = CloudinaryField("document",null=True,blank=True)
    verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.vendor.name


class Booking(models.Model):
    STATUS = (("pending","Pending"),("accepted","Accepted"),("completed","Completed"),("cancelled","Cancelled"))
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    service = models.ForeignKey(Service,on_delete=models.CASCADE)
    Vendor = models.ForeignKey(Vendor,on_delete=models.SET_NULL,null=True,blank=True)
    booking_date = models.DateField()
    booking_time = models.TimeField()
    address = models.ForeignKey(Address,on_delete=models.CASCADE)
    status = models.CharField(max_length=20,choices=STATUS,default="pending")
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.user.username



class Review(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    service = models.ForeignKey(Service,on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.user.username



class Payment(models.Model):
    PAYMENT_STATUS = (("pending","Pending"),("success","Success"),("failed","Failed"))
    booking = models.OneToOneField(Booking,on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8,decimal_places=2)
    payment_id = models.CharField(max_length=100,blank=True)
    status = models.CharField(max_length=20,choices=PAYMENT_STATUS,default="pending")
    created_at=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.booking)
    



class SubscriptionPlan(models.Model):
    FEATURES_MAP = {
    "Basic": ["view_services"],
    "Premium": ["view_services", "create_booking", "limited_support"],
    "Pro": ["view_services", "create_booking", "priority_support", "analytics"]}
    PLAN_TYPE = (("basic","Basic"),("premium","Premium"),("pro","Pro"),)
    name = models.CharField(max_length=50, choices=PLAN_TYPE, unique=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    duration_months = models.IntegerField()
    features = models.TextField()
    def __str__(self):
        return self.name
    

class VendorSubscription(models.Model):
    STATUS = (("active","Active"),("expired","Expired"),)
    Vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    plan = models.ForeignKey(SubscriptionPlan, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS, default="active")
    payment_id = models.CharField(max_length=100, blank=True)
    def save(self, *args, **kwargs):
        if not self.end_date:
            self.end_date = self.start_date + timedelta(days=self.plan.duration_months * 30)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.Vendor.name + " - " + self.plan.name
    

class VendorAvailability(models.Model):
    vendor = models.ForeignKey(Vendor,on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    is_booked = models.BooleanField(default=False)
    def __str__(self):
        return self.vendor.name