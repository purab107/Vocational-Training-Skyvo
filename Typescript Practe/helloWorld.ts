function sayHello(person: string){
    return "Hello "+person
}

let username = ["pankaj", "alex", "priyanshu", "tanmay"];

function getRandom1(){
  return Math.floor(Math.random() * username.length);
}
// for(let i=0; i<username.length; i++){
//     console.log(sayHello(username[i]))
// }

console.log(sayHello(username[getRandom()]));

