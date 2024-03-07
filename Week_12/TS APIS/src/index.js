"use strict";
// interface User {
//     id:string,
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// //*Pick
// type updatedProps = Pick<User, 'name' | 'age'| 'email'>
// type optionalProps = Partial<updatedProps> //Partials
// function updated(user:optionalProps){
//     console.log(`Name is ${user.name} age is ${user.name}`);
// }
// //*Readonly
// type Details = {
//     readonly name:string,
//     readonly age:number
// }
// const user:Details ={
//      name:"H",
//      age:78   
// }
// // user.age = 21 ReadOnly 
// //Records
// interface User1 {
//     id: string,
//     name:string
// }
// type Userss = Record<string,User1>;
// const users:Userss ={
//     '1': {id:"a", name:"ko"},
//     '2': {id:"b", name:"ko2"}
// }
// console.log(users);
// //Maps similar approach 
// interface User {
//     id: string;
//     name: string;
//   }
//   // Initialize an empty Map
//   const usersMap = new Map<string, User>();
//   // Add users to the map using .set
//   usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
//   usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
//   // Accessing a value using .get
//   console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
// //Exclude 
// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'
// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };
// handleEvent('click'); // OK
//Zod with ts
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Define the schema for profile update
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    age: zod_1.z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body; // how to assign a type to updateBody?
    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: "User updated"
    });
});
app.listen(3000);
