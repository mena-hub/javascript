let namesAndOccupations = {
    santos: "logística y planificación",
    lamponne: "técnica y movilidad",
    ravenna: "caracterización",
    medina: "investigación"
};

for (let key in namesAndOccupations) {
    console.log(`${namesAndOccupations[key]} => ${key}`);
}

namesAndOccupations.betun = "tareas varias";

if ("betun" in namesAndOccupations) {
    console.log("Betún:", namesAndOccupations.betun);
}