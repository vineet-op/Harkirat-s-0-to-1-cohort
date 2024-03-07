import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {

    const res =await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    })

    console.log(res);
    
}

//insertUser("admin2", "123456", "harkirat", "singh")


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    
    const res = await prisma.user.update({
        where:{username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
    
}



updateUser("admin1",{
    firstName:"Leo",
    lastName:"Messi"
})

