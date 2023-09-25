// Your code that executes queries
const createPool = require('../environment/dbconfig.js');

const executeQuery = async (sql, values, req, res) => {
  const pool = await createPool(); // Create a connection pool

  pool.query(sql, values, function (err, result) {
    if (err) {
      console.log({
        status: 'failure',
        message: '- ' + err.code + ' ,isFatal - ' + err.fatal,
      });
      return res
        .status(404)
        .json({
          status: 'failure',
          message: '- ' + err.code + ' ,isFatal - ' + err.fatal,
        });
    }

    res.send(result);
  });
};

module.exports = executeQuery;
