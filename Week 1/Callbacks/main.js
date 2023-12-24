//*finding sqaure 

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}
//*Finding sum of sqaure
function SumOfSquare(a, b) {
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2
}

function SumOfCube(a, b) {
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2
}

let ans = SumOfCube(2, 2);

console.log(ans);



//*Introducing callbacks here 
//* Its ensures DRY principle should be prevented
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}


function sumofSomething(a, b, fn) {
    console.log(fn);
    const val1 = fn(a); //calling sqaure here with fn args()
    const val2 = fn(b);
    return val1 + val2
}


let output = sumofSomething(2, 4, square);
console.log(output);


