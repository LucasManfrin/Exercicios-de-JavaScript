function JurosSimples(capitalinicial, taxadejuros, tempo) {
    let juro = capitalinicial * taxadejuros/100 * tempo // Fórmula Juros Simples J = C ∙ i ∙ t
    console.log(juro)
}
JurosSimples(400, 5, 4)

function JurosCompostos(capitalinicial, taxadejuros, tempo) {
    let juro = capitalinicial * (1 + taxadejuros/100)**tempo // Fórmula Juros Compostos M = C (1 + i)t
    let juroA = Math.floor(juro.toFixed(2))
    console.log(`O juros será de ${juroA-capitalinicial} e o montante é ${juroA}`)
}
JurosCompostos(1400, 7, 2)