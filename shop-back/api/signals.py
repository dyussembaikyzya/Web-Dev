from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .models import Category, Product

@receiver(post_migrate)
def create_initial_data(sender, **kwargs):
    if sender.name == 'api':
        if not Category.objects.exists():
            # Создаем категории
            electronics = Category.objects.create(name='Electronics')
            clothing = Category.objects.create(name='Clothing')
            books = Category.objects.create(name='Books')

            # Создаем товары
            Product.objects.create(
                name='Smartphone',
                price=699.99,
                description='Latest model smartphone with 128GB storage.',
                count=10,
                is_active=True,
                category=electronics
            )
            Product.objects.create(
                name='Laptop',
                price=1299.99,
                description='High performance laptop for work and gaming.',
                count=5,
                is_active=True,
                category=electronics
            )
            Product.objects.create(
                name='T-Shirt',
                price=19.99,
                description='100% cotton t-shirt, various sizes.',
                count=50,
                is_active=True,
                category=clothing
            )
            Product.objects.create(
                name='Novel Book',
                price=14.99,
                description='Bestselling novel for all ages.',
                count=30,
                is_active=True,
                category=books
            )
            print("Initial categories and products created.")