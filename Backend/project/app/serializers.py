from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    def username(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Username minimum 3 characters required")
        return value

    def phone(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Only Number Required")

        if len(value) != 10:
            raise serializers.ValidationError("Only 10 Numbers Are Allow")

        return value

    def pincode(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Only Numbers Are Allowed")

        if len(value) != 6:
            raise serializers.ValidationError(" 6 Numbers Are Allowed Only")

        return value

    def validate_city(self, value):
        if len(value) < 2:
            raise serializers.ValidationError("City Name Is Blank")

        return value
    


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
    def validate_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Service name must be at least 3 characters")
        return value

    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError("Price must be greater than 0")
        return value

    def validate_duration(self, value):
        if value <= 0:
            raise serializers.ValidationError("Duration must be greater than 0 minutes")
        return value



class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

    def pincode(self,value):
        if not value.isdigit():
            raise serializers.ValidationError("Only numbers allowed")
        if len(value)!=6:
            raise serializers.ValidationError("Pincode must be 6 digits")
        return value
    

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'

    def validate_phone(self,value):
        if not value.isdigit():
            raise serializers.ValidationError("Only number required")
        if len(value)!=10:
            raise serializers.ValidationError("Phone must be 10 digit")
        return value

    def experience(self,value):
        if value < 0:
            raise serializers.ValidationError("Experience cannot be negative")
        return value


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
    def status(self,value):
        Status=["pending","accepted","completed","cancelled"]
        if value not in Status:
            raise serializers.ValidationError("Invalid status")
        return value


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
    def validate_rating(self,value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("Rating 1 to 5 only")
        return value

class PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = '__all__'
    def validate_amount(self,value):
        if value <= 0:raise serializers.ValidationError("Amount must be greater than 0")
        return value
    

class SubscriptionPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionPlan
        fields = '__all__'

class VendorSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendorSubscription
        fields = '__all__'
    def validate(self, data):
        if data["plan"].price <= 0:
            raise serializers.ValidationError("Invalid plan price")
        return data
    


    