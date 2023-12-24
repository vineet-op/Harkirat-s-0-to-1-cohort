// let ages = [21, 471, 2, 4, 6];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     }

// }


// const allUsers = [{
//     fname: "Vineet",
//     gender: "male"
// },
// {
//     fname: "Vineet",
//     gender: "male"
// },
// {
//     fname: "Ruchi",
//     gender: "female"
// }]



// for (let i = 0; i < allUsers.length; i++) {
//     if (allUsers[i].gender == "female") {  //*Here i denotes the each nested objects{} in array
//         console.log(allUsers[i].fname);
//     }
// }




//Callback

function sum(num1, num2, func) {
    let result = num1 + num2;
    func(result)
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum


let ans = sum(1, 2, displayResult)








