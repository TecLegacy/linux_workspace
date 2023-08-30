class Vehicle {
  private numberOfWheels(): string {
    return `I'm a car ${4}`;
  }
  public drive(): void {
    console.log('Wroom Wroom', this.numberOfWheels());
  }

  public honk(): void {
    console.log('Beep Beep');
  }
  // protected method can be accessed by child class but not outside the class or instance of the class itself.
  protected bodyType(): void {
    console.log('Sedan');
  }
}

const vehicle = new Vehicle();
vehicle.drive();

// Basic Inheritance
class Car extends Vehicle {
  // Method overriding without modifying the parent class modifier
  //  You are not suppose to change the parent class modifier in child class
  private speed(): void {
    console.log('100kmp/h');
  }

  public showSpeed(): void {
    this.speed();
  }

  // Method overriding of protected method
  protected bodyType(): void {
    console.log('SUV');
  }

  public chassisType(): void {
    this.bodyType();
  }
}

// const vehicle = new Vehicle();
// vehicle.speed();

const car = new Car();
car.showSpeed();
car.chassisType();
