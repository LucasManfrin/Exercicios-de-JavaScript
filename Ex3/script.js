let resultado = []
function Bhaskara(a, b, c) {
    let delta = (b**2) - 4*a*c
        if (delta < 0) {
            return "Delta é negativo"
        } else {
            let raizDelta = Math.sqrt(delta)
            let x1 = (-b - raizDelta) / (2*a)
            let x2 = (-b + raizDelta) / (2*a)
            resultado.push(x1)
            resultado.push(x2)
            return resultado
        }
}
let resultadoBhaskara = Bhaskara(3, 5, 12);
console.log(resultadoBhaskara);
