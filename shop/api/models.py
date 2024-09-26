from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    details = models.TextField(null=True, blank=True)
    count = models.IntegerField()
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    sale = models.BooleanField(default=False)

    def __str__(self):
        return self.name