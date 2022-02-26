const pool = require('./db')
const query = require('./queries')

const getbookcat = (req, resp) => {
    pool.query(query.getbookcat, (error,output) => {
        if (error) throw error;
        resp.status(200).json(output.rows);
    });
};
const getBookByCat = (req, resp) => {
    const cat = parseInt(req.params.cat);
    pool.query(query.getBookByCat, [cat], (error,output) => {
        if (error) throw error;
        resp.status(200).json(output.rows);
    });
};

module.exports = {
    getbookcat,
    getBookByCat,
}