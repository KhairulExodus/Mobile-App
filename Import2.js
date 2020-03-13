const myimport = require('./Export2.js');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

console.log("___________");
console.log("       Your trusted user registration       ");
console.log("       By the Great Khairul Exodus       ");
console.log("\n");


r1.question('Input name  ', (name)=> {
    r1.question('Input matric no ', (matric)=>{
        r1.question('Input major ', (major)=>{
        
            let budak= new student(name,matric,major);   
            console.log(budak);    

            r1.close();
            console.log("_____E N D______");
        });
         
        });
    });
