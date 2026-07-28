function login(email, password){
    if(email === "admin@test.com" && password === "12345"){
        return "Login Successful";
    }
    return "Login Failed";
}
console.log(login("admin@test.com","12345"));



 let name = "Abayomi"
function greet(name)
 {
    console.log("Hello " + name)
}
greet("Abayomi");


let a=20
let b=10
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(a*b);