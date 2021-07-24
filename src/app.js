require("./db/connection");
const yargs = require("yargs");
const { addUser } = require("./utils");
const { showData } = require("./utils");
const { addMovie } = require("./utils");
const command = process.argv[2];
const user = yargs.argv.user;
const password = yargs.argv.password;
const title = yargs.argv.title;
const categories = yargs.argv.categories;
const actor = yargs.argv.actor;
const watched = yargs.argv.watched;
const rating = yargs.argv.rating;

const app = () => {
    if(command === 'add user') {
        addUser(user, password)
    } else if (command === 'add movie') {
        addMovie(title, categories, actor, watched, rating)
    } else if (command === 'show data') {
        showData()
    }
};

app();