{
  // Problem - Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge(): number {
      return new Date().getFullYear() - this.year;
    }
  }

  const hondaCar = new Car("Honda", "Civic", 2015);
  const res = hondaCar.getCarAge();
  console.log(res);

  //
}
