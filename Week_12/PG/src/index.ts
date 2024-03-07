// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString:"postgresql://vineet290403:3moTKVeG6PLQ@ep-round-night-a1f34pr1.ap-southeast-1.aws.neon.tech/Test?sslmode=require"
})

async function insertData(username:string, password:string, email:string) {
  await client.connect()
  const result = await client.query(`
  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)`
  ,[username,password,email])

  console.log(result); // Output insertion result    
}

insertData(
  "Vineet01",
  "123456ecq",
  "harqsk@gmail.com"
);