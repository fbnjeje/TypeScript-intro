function addNumbers(a: number, b: number) {
  return a + b;
}

const arrowNumbers = (a: number, b: number): number => {
  return a + b;
};

function multiply(
  firstNumver: number,
  secondNumber?: number,
  base: number = 2,
) {
  return firstNumver * base;
}
// const result: number = addNumbers(1, 2);
// const multiplyResult: number = multiply(1);
// // console.log({ result, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 20);
healCharacter(strider, 60);
healCharacter(strider, 10);

strider.showHp();
