"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://vineet290403:3moTKVeG6PLQ@ep-round-night-a1f34pr1.ap-southeast-1.aws.neon.tech/Test?sslmode=require"
});
//*Creating Table
// async function createUserstable(){
//     await client.connect()
//     const result = await client.query(`
//          CREATE TABLE users1 (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );   
//     `)
//     console.log(result);
// }
// createUserstable()
//*Insert data with no security
// async function InsertData(){
//     try {
//         await client.connect()
//         const InsertQuery = "INSERT INTO users1  (username, email, password) VALUES ('username232', 'user233@example.com', 'user_password');"
//         const res = await client.query(InsertQuery)
//         console.log("Insertion Success" + res);
//     } catch (error) {
//         console.log("Error during inseration");
//     }
//     finally{
//         await client.end()
//     }
// }
// InsertData()
//*Inserting data by user provided fields
// async function InsertData(username:string, email:string , password:string){
//     try {
//         await client.connect()
//         const InsertQuery = "INSERT INTO users1  (username, email, password) VALUES ($1, $2, $3);"
//         const values = [username, email, password ]
//         const res = await client.query(InsertQuery, values)
//         console.log("Insertion Success" + res);
//     } catch (error) {
//         console.log("Error during inseration");
//     }
//     finally{
//         await client.end()
//     }
// }
// InsertData("username65","user65@yahoo.com","user65_pass").catch(console.error)
//*Getting back the user data
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = "SELECT * FROM users1 WHERE email = $1";
            const value = [email];
            const result = yield client.query(query, value);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows[0]); // Output user data
                return result.rows[0]; // Return the user data
            }
            else {
                console.log('No user found with the given email.');
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err; // Rethrow or handle error appropriately
        }
        finally {
            yield client.end();
        }
    });
}
getUser("user65@yahoo.com").catch(console.error);
