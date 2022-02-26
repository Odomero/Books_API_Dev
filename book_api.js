//REST API demo in Node.js

const express = require('express'); // requre the express framework

const bookroute = require('./routes.js');

const PORT = 9099;

const app = express();

app.use(express.json());

app.get('/', (req,resp) => {
    resp.send("Welcome to Best Selling Books API.");
})

// Endpoint to Get all books
//app.use('/bookapi', bookroute.getbook_r);

// Endpoint to Get books category
app.use('/bookcat_api', bookroute);

var book = {
    "book_3": {
        "id": 3,
        "title": "Shot In The Heart",
        "author": "Mikal Gilmore",
        "year": 1994,
        "url": "https://www.goodreads.com/en/book/show/367337.Shot_in_the_Heart"  
      },
} 



// Create a server to listen at port 8080
app.listen(PORT, () => console.log("Books API running on port %s", PORT))