# tunr/urls.py
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('categories/<str:pk>', views.CategoryDetail.as_view(), name='category-detail'),
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('products/<str:pk>', views.ProductDetail.as_view(), name='product-detail'),
    path('cart/', views.CartList.as_view(), name='cart-list')
]