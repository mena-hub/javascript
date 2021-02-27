let people = ["Santos", "Lamponne", "Ravenna", "Medina"];

for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}
console.log("** array: iteración\n");

people.shift();

people.pop();

people.unshift("Betún");

people.push("Milazzo");

for (let i=0; i<people.length; i++) {
    if (i>1) {
        break;
    }
    console.log(people[i]);
}
console.log("** array modificado: iteración + break\n");