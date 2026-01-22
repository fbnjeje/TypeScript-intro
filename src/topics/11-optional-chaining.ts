interface Passanger {
  name: string;
  children?: string[];
}

const passanger1 = {
  name: "camilo",
};

const passanger2 = {
  name: "federico",
  children: ["luisa", "michelle"],
};
const printChildren = (passanger: Passanger) => {
  const howManyChildren = passanger.children?.length || 0;

  console.log(passanger.name, howManyChildren);
};

printChildren(passanger1);
