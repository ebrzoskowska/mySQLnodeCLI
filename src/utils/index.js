const sql = require("../db/connection");

exports.addUser = (username, password) => {
  try 
  {
    const user = {
      username: username,
      password: password
    }
    sql.query("INSERT INTO users SET ?", user) 
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
    sql.query("INSERT INTO movies SET ?", movie) 
  } 
  catch (error)
  {
    console.log(error)
  }
}

exports.deleteMovie = (title, username, password) => {
  try 
  {
    const movie = [title, username, password]
    sql.query("DELETE FROM movies WHERE title = ? AND userID = (SELECT id FROM users WHERE username = ? AND password = ?)", movie)
  } 
  catch (error)
  {
    console.log(error)
  }
}

exports.editMovie = (title, username) => {
  try 
  {
    const editMovie = [title, username];
    sql.query("UPDATE movies SET watched = 'true' WHERE title = ? AND userID = (SELECT id from users WHERE username = ?)", editMovie)
  } 
  catch (error) 
  {
    console.log(error);
  }
};

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