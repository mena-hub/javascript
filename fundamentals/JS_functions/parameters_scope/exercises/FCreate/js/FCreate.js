function createEmployee(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

let mario = createEmployee("Mario", "Santos");
let emilio = createEmployee("Emilio", "Ravenna");
let franco = createEmployee("Franco", "Milazzo");
let employees = [mario, emilio, franco];

console.log(employees);

function findEmployeeByFirstName(name) {
    let caseInsensitive = name.toLowerCase();
    
    for (let i=0; i<employees.length; i++) {
        if (employees[i].firstName.toLowerCase() === caseInsensitive) {
            return true;
        }
    }
    return false;
}

console.log("Encontrado ", findEmployeeByFirstName("franco"));
console.log("Encontrado ", findEmployeeByFirstName("Franco"));
console.log("Encontrado ", findEmployeeByFirstName("MARIO"));
console.log("Encontrado ", findEmployeeByFirstName("EmiLiOoo"));
console.log("Encontrado ", findEmployeeByFirstName("Gabriel"));