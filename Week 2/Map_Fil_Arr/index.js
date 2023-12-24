//Map function


const input = [1, 2, 3, 4];

const ans = input.map(function (i) {
    return i * 2;
})

console.log(ans);

//another way

// const input = [1, 2, 3, 4];

const an = input.map(i => i * 2);

console.log(an);


//Filter function 

const newArray = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
        newArray.push(input[i])
    }

}
console.log(newArray);

const res = input.filter((i => i % 2 === 0))

console.log(res);

const result = input.filter(function (n) {
    if (n % 2 == 0) {
        return true
    }
    return false
})

console.log(result);