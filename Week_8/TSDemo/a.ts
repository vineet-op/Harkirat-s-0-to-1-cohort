interface User {
    firstname:String,
    lastname:String,
    age:number,
    email ? :string
}


function isLegal(user : User){
    if (user.age > 18) {
        return true
    }
    else{
        return false
    }
}

function greet( user:User){
    console.log("Hello" + user.firstname );
    
}


isLegal({
    firstname:"Vineet",
    lastname:"Jadhav",
    age:20
})
