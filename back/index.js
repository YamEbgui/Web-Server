
const http = require("http");
const validStudent = require("./db")

//create local server => http://localhost:3000
const server = http.createServer ((req,res) => {
    console.log(req,"req"); 
    res.writeHead(200 , "ok" , {"Content-Type" : "text/html"})
   
    if(req.method === "POST"){
        let body ='';
        req.on('data',(data)=>{
            body+= data;
        });
        req.on('end', ()=>{
            res.write(isValid(JSON.parse(body)).toString());
            res.end();
        });

    }

})

const port = 3000;

server.listen (port ,()=>{
    console.log("the server is running on 3000")
})


//check if the data is vaild to be accepted to the course 
const isValid =  (data) => {
    return isValidName (data.nameValue) && isValidAge (data.ageValue) && isValidSkils(data.abilityValue);
}
//check if the skil the user insert is vaild to be accepted to the course 
const isValidSkils = (skil) =>{
    for (let i = 0 ; i < validStudent.ability.length ; i++){
        if(skil === validStudent.ability[i]){
            return true;
        }
    }
    console.log(2);
    return false;
}
//check if the age the user insert is vaild to be accepted to the course 
const isValidAge = (age) =>{
    return age > validStudent.minAge && age < validStudent.maxAge;
}
//check if the name the user insert is vaild to be accepted to the course 
const isValidName = (name) =>{
    for (let i = 0 ; i < validStudent.nameNotEqual.length ; i++){
        if(name.toLowerCase() === validStudent.nameNotEqual[i].toLowerCase()){
            return false;
        }
    }
    return true;
}