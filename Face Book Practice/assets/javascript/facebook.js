// console.log("hello world this link works now");
// prompt("Hi, how are you?");

var userName = prompt("What is your username?");
var userPassword = prompt("What is your password");

function checkUserInfo() {
    if(userName === "btommer@gmail.com" && userPassword === "zappa1993") {
        alert("welcome to facebook!"); } 
        else {
            alert("sorry, your info is incorrect!")
        }
    }


checkUserInfo();