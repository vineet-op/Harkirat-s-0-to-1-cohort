import { Client } from 'pg'
 
const client = new Client({
    connectionString: "postgresqlurl"
})

//*Creating Table
async function createUserstable(){
    await client.connect()
    const result = await client.query(`
         CREATE TABLE users1 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );   
    `)
    console.log(result);

}


createUserstable()

// *Insert data with no security
async function InsertData(){
    try {
        await client.connect()
        const InsertQuery = "INSERT INTO users1  (username, email, password) VALUES ('username232', 'user233@example.com', 'user_password');"
        const res = await client.query(InsertQuery)
        console.log("Insertion Success" + res);
        
    } catch (error) {
        console.log("Error during inseration");
        
    }
    finally{
        await client.end()
    }

}

InsertData()


//*Inserting data by user provided fields

async function InsertData(username:string, email:string , password:string){
    try {
        await client.connect()
        const InsertQuery = "INSERT INTO users1  (username, email, password) VALUES ($1, $2, $3);"
        const values = [username, email, password ]
        const res = await client.query(InsertQuery, values)
        console.log("Insertion Success" + res);
        
    } catch (error) {
        console.log("Error during inseration");
        
    }
    finally{
        await client.end()
    }

}

InsertData("username65","user65@yahoo.com","user65_pass").catch(console.error)

//*Getting back the user data

async function getUser(email:string){

    try {
        await client.connect()
        const query = "SELECT * FROM users1 WHERE email = $1";
        const value = [email]
        const result = await client.query(query,value)

        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
          } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
          }  
      
    } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
    }
    finally{
        await client.end()
    }
}

getUser("user65@yahoo.com").catch(console.error)