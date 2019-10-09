
userNamePrompt = prompt("Hello!  What is your username?");
passwordPrompt = prompt("Ok dickhead, I mean " + userNamePrompt + ", what is your password?");

database = [
    {
        username: "btommer",
        password: "zappa1993",
        newsFeed: "Today's weather sucks ass!",
    },
    {   
        username: "karin",
        password: "katkarn101",
        newsFeed: "I think todays weather sucks ass too!",
    },
];

function x(user, pass) {
    if (user === "btommer" && pass === "zappa1993") {

        alert("Welcome to fake facebook dickhead, I mean " + userNamePrompt);
        console.log(database);
    } else {
        alert("Sorry, wrong credentials retard");
    }
}

x(userNamePrompt, passwordPrompt);
