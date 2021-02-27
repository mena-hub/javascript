function RPS() { 

    function determineComputer(num) {
        if (num<=.33) return "piedra";
        else if (num<=.66) return "papel";
        return "tijera";
    }
    
    let userChoice = prompt("1, 2, 3… ¡piedra, papel o tijera!").toLowerCase();
    let computerChoice = determineComputer(Math.random());
    let answers = ["piedra", "papel", "tijera"]
    
    if (!userChoice || answers.indexOf(userChoice) === -1) {
        return "Por favor, seleccioná una opción válida."
    }
    
    if (userChoice === computerChoice) return "¡Es un empate!";
    
    if (userChoice === "piedra" && computerChoice === "papel") return "Perdiste :( Computadora: " + computerChoice;
    if (userChoice === "papel" && computerChoice === "tijera") return "Perdiste :( Computadora: " + computerChoice;
    if (userChoice === "tijera" && computerChoice === "piedra") return "Perdiste :( Computadora: " + computerChoice;
    
    return "¡Ganaste! Computadora: " + computerChoice;

}

console.log(RPS());