let firstName = "Tony";

function sayHello(str) {
    if (str === firstName) {
        return "To my little friend";
    }
    return "Oh! Hello, " + str; 
}

console.log(sayHello("Tony"));
console.log(sayHello("you"));
console.log(sayHello("stranger"));