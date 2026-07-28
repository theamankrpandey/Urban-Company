from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from django.shortcuts import get_object_or_404
# Create your views here.

def get_plan_features(provider_id):
    sub = VendorSubscription.objects.filter(vendor_id=provider_id).first()
    if not sub:
        return ("Not Found")
    plan_name = sub.plan.name
    return SubscriptionPlan.FEATURES_MAP.get(plan_name, [])

def filter_services_by_plan(vendor_id):
    features = get_plan_features(vendor_id)
    services = Service.objects.all()
    if "analytics" not in features:
        services = services.exclude(is_active=False)
    return services

def update_all_subscriptions():
    subs = VendorSubscription.objects.all()
    for s in subs:
        if s.end_date < timezone.now():
            s.status = "expired"
            s.save()

@csrf_exempt
@api_view(["GET","POST","PUT","PATCH","DELETE"])
def UserApi(req,id=None):
    if req.method == "GET":
        if id:
            data = User.objects.get(id=id)
            serializer = UserSerializer(data)
        else:
            data = User.objects.all()
            serializer = UserSerializer(data,many=True)
        return Response(serializer.data)


    elif req.method == "POST":
        serializer = UserSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif req.method == "PUT":
        data = User.objects.get(id=id)
        serializer = UserSerializer(data,data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif req.method == "PATCH":
        data = User.objects.get(id=id)
        serializer = UserSerializer(data,data=req.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif req.method == "DELETE":
        data = User.objects.get(id=id)
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@csrf_exempt
@api_view(["GET","POST","PUT","PATCH","DELETE"])
def ServiceApi(req,id=None):
    if req.method == "GET":
        if id:
            service = Service.objects.get(id=id)
            serializer = ServiceSerializer(service)
        else:
            service = Service.objects.all()
            serializer = ServiceSerializer(service,many=True)
        return Response(serializer.data)

    elif req.method == "POST":
        active, msg = check_active_subscription(req.data.get("provider"))
        if not active:
            return Response({"error": msg},status=status.HTTP_403_FORBIDDEN)
        serializer=BookingSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif req.method == "PUT":
        active, msg = check_active_subscription(req.data.get("provider"))
        if not active:
            return Response({"error": msg},status=status.HTTP_403_FORBIDDEN)
        service = Service.objects.get(id=id)
        serializer = ServiceSerializer(service,data=req.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif req.method == "PATCH":
        active, msg = check_active_subscription(req.data.get("provider"))
        if not active:
            return Response({"error": msg},status=status.HTTP_403_FORBIDDEN)
        service = Service.objects.get(id=id)
        serializer = ServiceSerializer(service,data=req.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif req.method == "DELETE":
        service = Service.objects.get(id=id)
        service.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
@csrf_exempt
@api_view(["GET","POST","PUT","PATCH","DELETE"])
def AddressApi(req,id=None):
    if req.method=="GET":
        if id:
            data=Address.objects.get(id=id)
            serializer=AddressSerializer(data)
        else:
            data=Address.objects.all()
            serializer=AddressSerializer(data,many=True)
        return Response(serializer.data)

    elif req.method=="POST":
        serializer=AddressSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors)

    elif req.method=="PUT":
        data=Address.objects.get(id=id)
        serializer=AddressSerializer(data,data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


    elif req.method=="PATCH":
        data=Address.objects.get(id=id)
        serializer=AddressSerializer(data,data=req.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

    elif req.method=="DELETE":
        data=Address.objects.get(id=id)
        data.delete()
        return Response(status=204)



@csrf_exempt
@api_view(["GET","POST","PUT","PATCH","DELETE"])
def VendorApi(req,id=None):
    if req.method=="GET":
        data=Vendor.objects.all()
        serializer=VendorSerializer(data,many=True)
        return Response(serializer.data)

    elif req.method=="POST":
        active, msg = check_active_subscription(req.data.get("Vendor"))
        if not active:
            return Response({"error": msg},status=status.HTTP_403_FORBIDDEN)
        serializer=VendorSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors)

    elif req.method=="PUT":
        active, msg = check_active_subscription(req.data.get("Vendor"))
        if not active:
            return Response({"error": msg},status=status.HTTP_403_FORBIDDEN)
        data=Vendor.objects.get(id=id)
        serializer=VendorSerializer(data,data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

    elif req.method=="PATCH":
        active, msg = check_active_subscription(req.data.get("Vendor"))
        if not active:
            return Response({"error": msg},status=status.HTTP_403_FORBIDDEN)
        data=Vendor.objects.get(id=id)
        serializer=VendorSerializer(data,data=req.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif req.method=="DELETE":
        data=Vendor.objects.get(id=id)
        data.delete()
        return Response(status=204)
    
@csrf_exempt
@api_view(["GET", "POST", "PUT", "PATCH", "DELETE"])
def BookingApi(req, id=None):
    if req.method == "GET":
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)
    elif req.method == "POST":
        active, msg = check_active_subscription(req.data.get("Vendor"))
        if not active:
            return Response({"error": msg}, status=403)
        features = get_plan_features(req.data.get("Vendor"))
        if "create_booking" not in features:
            return Response({"error": "Upgrade plan required to create booking"},status=403)
        serializer = BookingSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    elif req.method in ["PUT", "PATCH"]:
        booking = get_object_or_404(Booking, id=id)
        serializer = BookingSerializer(booking,data=req.data,partial=(req.method == "PATCH"))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif req.method == "DELETE":
        booking = get_object_or_404(Booking, id=id)
        booking.delete()
        return Response(status=204)
    

@csrf_exempt
@api_view(["GET","POST"])
def ReviewApi(req):
    if req.method=="GET":
        data=Review.objects.all()
        serializer=ReviewSerializer(data,many=True)
        return Response(serializer.data)
    
    elif req.method=="POST":
        serializer=ReviewSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors)
    



@csrf_exempt
@api_view(["GET","POST","PATCH"])
def PaymentApi(req,id=None):
    if req.method=="GET":
        data=Payment.objects.all()
        serializer=PaymentSerializer(data,many=True)
        return Response(serializer.data)
    elif req.method=="POST":
        serializer=PaymentSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors)
    elif req.method=="PATCH":
        data=Payment.objects.get(id=id)
        serializer=PaymentSerializer(data,data=req.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    


@api_view(["GET","POST","PATCH"])
def SubscriptionPlanApi(req,id=None):
    if req.method == "GET":
        data = SubscriptionPlan.objects.all()
        serializer = SubscriptionPlanSerializer(data, many=True)
        return Response(serializer.data)
    elif req.method == "POST":
        serializer = SubscriptionPlanSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors)
    
@api_view(["GET","POST","PATCH"])
def VendorSubscriptionApi(req,id=None):
    if req.method == "GET":
        data = VendorSubscription.objects.all()
        serializer = VendorSubscriptionSerializer(data, many=True)
        return Response(serializer.data)
    elif req.method == "POST":
        serializer = VendorSubscriptionSerializer(data=req.data)
        if serializer.is_valid():
            subscription = serializer.save()
            provider = subscription.provider
            provider.is_available = True
            provider.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors)
    elif req.method == "PATCH":
        data = VendorSubscription.objects.get(id=id)
        serializer = VendorSubscriptionSerializer(data,data=req.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
def check_active_subscription(provider_id):
    sub = VendorSubscription.objects.filter(provider_id=provider_id).first()
    if not sub:
        return False, "No subscription found"
    if sub.end_date < timezone.now():
        sub.status = "expired"
        sub.save()
        return False, "Subscription expired"
    return True, "Active subscription"


