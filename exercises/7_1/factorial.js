function factorial (N) {
    let fat = N

    for (i=N;i<0;i--) {
    fat = fat*i
    }
    return fat
}

console.log(factorial(4))