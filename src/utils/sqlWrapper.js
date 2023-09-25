const con = require('../environment/dbconfig.js');

const executeQuery = (sql, values, req, res) => {
  con.query(sql, values, function(err, result) {

    if (err) {
      console.log({
        status: 'failure',
        message: '- ' + err.code + ' ,isFatal - ' + err.fatal
      });
      return res
        .status(404)
        .json({
          status: 'failure',
          message: '- ' + err.code + ' ,isFatal - ' + err.fatal
        });
    }

    res.send(result);
  });
};

module.exports = executeQuery;