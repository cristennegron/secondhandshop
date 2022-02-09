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
    categories = serializers.HyperlinkedRelatedField(
        view_name='category_detail',
        read_only=True
    )

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'descripton', 'category', 'image')

class CartSerializer(serializers.HyperlinkedModelSerializer):
    products = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Cart
        fields = ('id', 'product', 'quantity', 'total')