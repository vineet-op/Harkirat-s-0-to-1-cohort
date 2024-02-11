"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("Hello" + user.firstname);
}
isLegal({
    firstname: "Vineet",
    lastname: "Jadhav",
    age: 20
});
