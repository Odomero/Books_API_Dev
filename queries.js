const getBookByCat = 
    "SELECT b.id,b.title,au.author_name,b.year,b.url,b.book_cat_id,al.book_cat FROM books b INNER JOIN all_books al USING (book_cat_id) INNER JOIN author au USING(author_id) WHERE b.book_cat_id = $1;";
const getBookCat = 
    "SELECT * FROM all_books INNER JOIN (SELECT b.book_cat_id, COUNT(*) FROM books b GROUP BY b.book_cat_id) AS book_tab USING (book_cat_id)";
const checkBookExist = "SELECT b.title FROM books b WHERE b.title = $1";
const checkAuthorExist = "SELECT author_id FROM author WHERE author_name = $1";
const addAuthor = "INSERT INTO author (author_name) VALUES ($1)";
const addBook = 
    "INSERT INTO books (title,author_id,year,url,book_cat_id) VALUES ($1,$2,$3,$4,$5)";
const deleteBook = "DELETE FROM books WHERE title = $1"


module.exports = {
    getBookCat,
    getBookByCat,
    checkBookExist,
    checkAuthorExist,
    addAuthor,
    addBook,
    deleteBook
}





