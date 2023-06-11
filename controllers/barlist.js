const conn = require("../db.js");

exports.get = (req, res, next) => {
  const variable = req.params.variable || "certification";
  console.log(variable);
  const query = `SELECT  ${variable} as name, 
		count(${variable}) as value
        FROM certifications 
        group by ${variable}
        order by count(${variable}) DESC LIMIT 5;`;
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
