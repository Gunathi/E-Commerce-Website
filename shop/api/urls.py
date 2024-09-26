from django.urls import path
from . import views

urlpatterns = [
    path('', views.productList, name='products'),
    path('unique-products/', views.unique_products_by_category, name='unique-products'),
    path('most-sold-products/', views.most_sold_products, name='most-sold-products'),
    path('product-detail/<int:pk>', views.product_detail, name='product-detail'),
]
