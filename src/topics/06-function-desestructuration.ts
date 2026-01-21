export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Iphone",
  price: 200,
};

const tv: Product = {
  description: "samsung tv oled 4k",
  price: 350,
};

interface TaxCalculatorOptions {
  tax: number;
  product: Product[];
}

export function taxCalculator(options: TaxCalculatorOptions): [number, number] {
  const { tax, product } = options;
  let total = 0;
  product.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}
const shoppingCart = [phone, tv];
const tax = 0.15;

const [totalTax, total] = taxCalculator({
  product: shoppingCart,
  tax: tax,
});

console.log("total: ", total);
console.log("tax: ", totalTax);

export interface Datos {
  num1: number;
  num2: number;
}

export function suma(valores: Datos) {
  const { num1, num2 } = valores;

  let total = 0;
  return (total = num1 * num2);
}
