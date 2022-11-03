let userName = prompt("hello! what is your name?");
let userAge = prompt(`Hi ${userName}! how old are you?`)
userAge = Number(userAge);
if(isNaN(userAge) || userAge >=120 || userAge <= 0){
    alert("wrong input!");
    throw INVALID_INPUT;
}else{
    document.getElementById("demo").innerHTML =
    `${userName} is ${userAge} years old`;
}
