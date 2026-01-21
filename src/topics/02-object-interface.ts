const skills: string[] = ["bash", "skills", "healing"];

interface character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: character = {
  name: "strider",
  hp: 100,
  skills: ["bash", "counter"],
};

strider.hometown = "Rivendell";

console.table({ strider });

export {};
