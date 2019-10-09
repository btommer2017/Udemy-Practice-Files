
usernamePrompt = prompt("Hello, what is your username?");
passwordPrompt = prompt("Hi " + usernamePrompt + ", thank you.  What is your password?");

database = [
    {
        username: "btommer",
        password: "zappa1993",
        newsFeed: "Wow, today is a great day to learn Javascript!",
    },
    {
        username: "karin",
        password: "vetkarin",
        newsFeed: "Today is a good day to work at home.",
    },
];

function checkPassword(user, pass) {
    if (user === "btommer" && pass === "zappa1993") {
            alert("Welcome to Facebook " + usernamePrompt + ".  And have a great day!" );
            alert(database[0].newsFeed);
            console.log(database); 
        } else {
            alert("Sorry, your username or password does not work, please refresh the page (f5) to try again.");
        }
}

checkPassword(usernamePrompt, passwordPrompt);
