"use strict";
function SumofAges(user1, user2) {
    return user1.age + user2.age;
}
const result = SumofAges({ name: "Vineet", age: 20 }, { name: "Pratik", age: 21 });
console.log(result);
