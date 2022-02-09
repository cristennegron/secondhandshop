from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    products = serializers.HyperlinkedRelatedField(
        view_name='product_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'products')