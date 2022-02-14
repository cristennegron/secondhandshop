from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    size = models.CharField(max_length=100, default='')
    price = models.DecimalField(max_digits=4, decimal_places=2)
    description = models.CharField(max_length=300)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=True, null=False, related_name='categories')
    image = models.ImageField(default=True)

    def __str__(self):
        return self.name

class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='products')
    quantity = models.IntegerField
    total = models.DecimalField(max_digits=4, decimal_places=2)

    def __str__(self):
        return self.product