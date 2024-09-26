from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import productSerializer

# Create your views here.

@api_view(['GET'])
def productList(request):

    products = Product.objects.all()
    serializer = productSerializer(products, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def unique_products_by_category(request):
    products = Product.objects.all()
    category_map = {}

    for product in products:
        if product.category not in category_map:
            category_map[product.category] = product

    unique_products = list(category_map.values())
    serializer = productSerializer(unique_products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def most_sold_products(request):
    products = Product.objects.filter(count__lte=5)

    serializer = productSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response(status=404)
    
    serializer = productSerializer(product)
    return Response(serializer.data)