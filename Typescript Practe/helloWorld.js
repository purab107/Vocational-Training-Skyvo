function sayHello(person) {
    return "Hello " + person;
}
var username = ["pankaj", "alex", "priyanshu", "tanmay"];
function getRandom() {
    return Math.floor(Math.random() * username.length);
}
// for(let i=0; i<username.length; i++){
//     console.log(sayHello(username[i]))
// }
console.log(sayHello(username[getRandom()]));
