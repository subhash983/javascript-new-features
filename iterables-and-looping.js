let animals = {
  animal1: "monkey",
  animal2: "tiger",
  animal3: "snake"
};

let fruits = ["apple", "banana", "orange"];
fruits[3] = "pear";

//for of loop
for (const fruit of fruits) {
  console.log(fruit);
}

//for in loop
for (const key in animals) {
  console.log(animals[key]);
}

//forof loop
for (const animal of Object.keys(animals)) {
  console.log(animal);
}
