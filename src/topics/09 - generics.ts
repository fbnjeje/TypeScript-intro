export function whatsMyType<T>(params: T): T {
  return params;
}

const amIString = whatsMyType<string>("hola mundo");
const amINumber = whatsMyType<number>(123);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
