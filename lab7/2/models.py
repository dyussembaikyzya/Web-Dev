class Animal:
    """Base class representing a generic animal."""

    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "..."

    def describe(self):
        return f"{self.name} is {self.age} years old and is {self.color}."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    """Child class representing a Dog."""

    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} fetches the ball!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    """Child class representing a Cat."""

    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor  

    def speak(self):
        return "Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def __str__(self):
        indoor_status = "indoor" if self.indoor else "outdoor"
        return f"Cat(name={self.name}, age={self.age}, type={indoor_status})"