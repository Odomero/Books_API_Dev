const pool = require('./db')
const query = require('./queries')

const getbookcat = (req, resp) => {
    pool.query(query.getBookCat, (error,output) => {
        if (error) throw error;
        resp.status(200).json(output.rows);
    });
};
const getBookByCat = (req, resp) => {
    const cat = parseInt(req.params.book_cat_id);
    pool.query(query.getBookByCat, [cat], (error,output) => {
        if (error) throw error;
        resp.status(200).json(output.rows);
    });
};

const addBook = (req, resp) => {
    const {title,author,year,url,book_cat_id} = req.body;
    //check if book already exist
    pool.query(query.checkBookExist,[title],(error,output) => {
        if (output.rows.length) {
           resp.send("Title already exist"); 
        }
        //check if author exist
        pool.query(query.checkAuthorExist,[author],(error,output) => {
            const noAuthor = !output.rows.length
            if (noAuthor) {
                pool.query(query.addAuthor, [author], (error, output) => {
                    if (error) throw error;
                    pool.query(query.checkAuthorExist,[author],(error,output) => {
                        for (let row of output.rows) {
                            const author_id = row["author_id"] 
                            pool.query(query.addBook, [title,author_id,year,url,book_cat_id], (error, output) => {
                                if (error) throw error;
                                resp.status(201).send("Book Added Succesfuly");
                                console.log("Book Added")
                            });                     
                        };
                    });
                })
            };
            for (let row of output.rows) {
                const author_id = row["author_id"] 
                pool.query(query.addBook, [title,author_id,year,url,book_cat_id], (error, output) => {
                    if (error) throw error;
                    resp.status(201).send("Book Added Succesfuly");
                    console.log("Book Added")
                });
            };
        });
    });   
};

const deleteBook = (req, resp) => {
    const title = req.params.title;
    //check if book already exist
    pool.query(query.checkBookExist,[title],(error,output) => {
        const noBookFound = !output.rows.length;
        if (noBookFound) {
            resp.send("You cannot delete Book. Book not found")
        }  
        pool.query(query.deleteBook,[title],(error,output) => {
            if (error) throw error;
            resp.status(200).send("Book Deleted Succesfuly");
            console.log("Book Deleted")
        })
    });
};


module.exports = {
    getbookcat,
    getBookByCat,
    addBook,
    deleteBook,
}