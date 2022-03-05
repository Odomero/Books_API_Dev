//REST API demo in Node.js

const express = require('express'); 

const bookroute = require('./routes.js');

const PORT = process.env.PORT || 9090;

const app = express();

app.use(express.json());

app.get('/', (req,resp) => {
    resp.send("Welcome to Best Selling Books API.");
})

// Endpoint to Get books category
app.use('/bookcat_api', bookroute);


// Create a server to listen at port 9090
app.listen(PORT, () => console.log("Books API running on port %s", PORT))