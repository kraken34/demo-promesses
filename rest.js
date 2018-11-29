let tab = [10,'A',30,40,50];
let tab2 = [10,'A',30,40,50];

let [maValeur, ...rest1] = tab;

console.log(rest1)

function add(a1, a2, a3) {
    console.log(a1, a2, a3)
}

add(...tab)