from rest_framework import serializers
from .models import Category, Product, Cart

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    products = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'products')

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    category = serializers.HyperlinkedRelatedField(
        view_name='category_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'category', 'image')

class CartSerializer(serializers.HyperlinkedModelSerializer):
    products = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Cart
        fields = ('id', 'products', 'quantity', 'total')