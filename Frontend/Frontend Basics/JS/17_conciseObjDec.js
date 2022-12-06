const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Marc Stanley", 18, 'M'));

const bicycle = {
    gear: 2,
    // We can define a function concisely here
    setGear(newGear) {
        gear = newGear
    }
}