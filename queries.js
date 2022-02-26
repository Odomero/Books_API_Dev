const getBooks = "SELECT * FROM r_books UNION ALL SELECT * FROM m_books UNION ALL SELECT * FROM c_books"

const getBookByCat = "SELECT * FROM r_books INNER JOIN all_books USING (book_cat_id) WHERE book_cat_id = $1"

const getBookCat = "SELECT * FROM all_books"

module.exports = {
    getBookCat,
    getBookByCat
}