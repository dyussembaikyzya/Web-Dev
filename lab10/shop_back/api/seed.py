from api.models import Category, Product

def run():
    Category.objects.all().delete()
    Product.objects.all().delete()

    categories = [
        Category.objects.create(name="Phones"),
        Category.objects.create(name="Laptops"),
        Category.objects.create(name="Accessories"),
        Category.objects.create(name="Gaming"),
    ]

    products_data = [
        ["iPhone 15", 450000],
        ["Samsung S23", 400000],
        ["Xiaomi 13", 300000],
        ["Google Pixel 7", 420000],
        ["Huawei P50", 350000],

        ["MacBook Air M2", 700000],
        ["Dell XPS 13", 650000],
        ["HP Spectre", 600000],
        ["Lenovo ThinkPad", 550000],
        ["Asus ZenBook", 500000],

        ["AirPods Pro", 120000],
        ["Wireless Mouse", 20000],
        ["Keyboard", 30000],
        ["Power Bank", 25000],
        ["USB-C Cable", 5000],

        ["PlayStation 5", 350000],
        ["Xbox Series X", 330000],
        ["Gaming Mouse", 40000],
        ["Gaming Keyboard", 60000],
        ["Gaming Chair", 150000],
    ]

    index = 0
    for category in categories:
        for i in range(5):
            name, price = products_data[index]
            Product.objects.create(
                name=name,
                price=price,
                description=f"{name} description",
                count=10,
                is_active=True,
                category=category
            )
            index += 1

    print("DONE")