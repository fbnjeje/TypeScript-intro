export class Person {
  public name: string;
  public address: string;

  constructor(name: string, address: string = "no Address") {
    this.name = name;
    this.address = address;
  }
}

export class Hero extends Person {
  public alterEgo?: string;
  public age?: number;
  public realName?: string;

  constructor(alterEgo: string, age: number, realName: string) {
    super(realName);

    this.alterEgo = alterEgo;
    this.age = age;
    this.realName = realName;
  }
}
const ironman = new Hero("Iron Man", 45, "Tony");

console.log(ironman);
