function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = "New property";
    hello = "override";
  };
}

export class SuperClass {
  public myProperty: string = "123Abc";

  print() {
    console.log("hola mundo");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
