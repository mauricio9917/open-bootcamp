// Ejercicio 12

const fib = function(n) {
    let arrayFibo = []
    const sol = [0, 1]

    for (let i = 2; i<= n; i++) {
        sol[i] = sol[i -1] + sol[i - 2]
    }
    arrayFibo = [...arrayFibo, sol]
    return arrayFibo;
}

console.log(fib(6))