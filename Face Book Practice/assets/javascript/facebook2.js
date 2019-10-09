// console.log("hello world this link works now");
// prompt("Hi, how are you?");

// var userName = prompt("What is your username?");
// var userPassword = prompt("What is your password");

// function checkUserInfo() {
//     if(userName === "btommer@gmail.com" && userPassword === "zappa1993") {
//         alert("welcome to facebook!"); } 
//         else {
//             alert("sorry, your info is incorrect!")
//         }
//     }


// checkUserInfo();


var database = [
    {
        username: "btommer",
        password: "zappa1993",
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "Today is gonna be a great day to learn!",
    },
    {
        username: "Jody",
        timeline: "Today I don't want to learn anything at all!!",
    },
];

var userNamePrompt = prompt("Hello, what is your username?");
var passwordPrompt = prompt("Hello " + userNamePrompt + ", what is your password?");


function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
            console.log(newsFeed);
            alert("Welcome to Facebook");
        } else {
            alert("Sorry, your username and or password are incorrect, please refresh the page to try again")
        }
}

signIn(userNamePrompt, passwordPrompt);

function add() {
 alert("this is my new add function");
}

// add();