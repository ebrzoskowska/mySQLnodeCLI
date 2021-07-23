const sql = require("../db/connection");

exports.addUser = (username, password) => {
  try 
  {
      const user = {
        username: username,
        password: password
      }
      sql.query("INSERT INTO users SET ?", user) 
// insert into users set username = "Cholerka", pass = 'jasna', it works different with many tables:        
// ("INSERT INTO users SET username='?'; INSERT INTO password SET password='?', userID = (SELECT is FROM users WHERE username = '?')",user)
  } 
  catch (error)
  {
      console.log(error)
  }
}

exports.addMovie = (title, categories, actor, watched, rating) => {
    try 
      {
        const movie = {
          title: title,
          categories: categories,
          actor: actor, 
          watched: watched, 
          rating: rating    
        }
        sql.query("INSERT INTO users SET ?", movie) 
      } 
    catch (error)
      {
        console.log(error)
      }
}

exports.showData = () => {
  try 
    {
      sql.query("SELECT title, categories, actor, watched, rating, username, password FROM movies, users WHERE movies.userID = users.id", function(err, result){     
        console.table(
            result.map(command => {
                return {
                    "title": command.title,
                    "category": command.categories,
                    "actor": command.actor,
                    "watched": command.watched,
                    "rating": command.rating,
                    "username": command.username,
                    "password": command.password
                };
            })
        );        
      })
    } 
  catch (error)
    {
      console.log(error)
    }
}