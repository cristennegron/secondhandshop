from pickle import TRUE
from rest_framework import serializers
from .models import Category, Product, Cart

class CategorySerializer(serializers.HyperlinkedModelSerializer):
      class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'name', 'size', 'price', 'description', 'image', 'category')

class CartSerializer(serializers.HyperlinkedModelSerializer):
    products = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Cart
        fields = ('id', 'products', 'quantity', 'total')