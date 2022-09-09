// Ejercicio 12

const fib = function(n) {
    let arrayFibo = []
    const num = [0, 1]

    for (let i = 2; i<= n; i++) {
        num[i] = num[i -1] + num[i - 2]
    }
    arrayFibo = [...arrayFibo, num]
    return arrayFibo;
}

console.log(fib(6))