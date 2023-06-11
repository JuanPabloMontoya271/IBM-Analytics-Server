const conn = require("../db.js");

exports.get = (req, res, next) => {
  const variable = req.params.variable || "certification";

  const query = `SELECT  ${variable}, 
		count(${variable}) as count
        FROM certifications 
        group by ${variable}
        order by count(${variable}) DESC;`;
  conn.query(query, function (err, data, fields) {
    if (err) return res.status(500).json({ log: err });
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
      category: variable,
      columns: fields.map((elem, key) => {
        return elem["name"];
      }),
    });
  });
};
