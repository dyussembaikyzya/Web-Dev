from models import Animal, Dog, Cat

def main():
    dog1 = Dog(name="Rex", age=3, color="brown", breed="Labrador")
    dog2 = Dog(name="Buddy", age=5, color="golden", breed="Golden Retriever")
    cat1 = Cat(name="Whiskers", age=2, color="white", indoor=True)
    cat2 = Cat(name="Shadow", age=4, color="black", indoor=False)

    animals = [dog1, dog2, cat1, cat2]

    print("=== All Animals ===")
    for animal in animals:
        print(animal)

    print("\n=== Descriptions ===")
    for animal in animals:
        print(animal.describe())

    print("\n=== Polymorphism: speak() ===")
    for animal in animals:
        print(f"{animal.name} says: {animal.speak()}")

    print("\n=== Unique Methods ===")
    print(dog1.fetch())
    print(cat1.purr())


if __name__ == "__main__":
    main()