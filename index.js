for (let a = 1; a < 500; a ++) {
    for (let b = 1; b < 250; b ++) {
        const c = 1000 - a - b;
        if (c*c === a*a + b*b) {
            console.log([a, b, c]);
            break;
        }
    }
}