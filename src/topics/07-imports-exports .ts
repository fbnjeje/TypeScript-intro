import {
  taxCalculator,
  type Datos,
  type Product,
} from "./06-function-desestructuration";

const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 299,
  },
  {
    description: "n160 pro",
    price: 10900000,
  },
];

// tax 15%

const [total, tax] = taxCalculator({ product: shoppingCart, tax: 0.15 });
console.log("total ", total);
console.log("tax ", tax);

const valor1: Datos[] = [
  {
    num1: 1,
    num2: 2,
  },
];

const { num1, num2 } = suma({ num: valor1 });

console.log("enfermaticos", num1, num2);
