const nombres = ["pablo", "german", "ariel", "juana", "sabrina"];

const personaBuscada = nombres.filter(persona => {
    return persona.includes ("g")
});
console.log(personaBuscada);