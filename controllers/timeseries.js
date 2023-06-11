const conn = require("../db.js");

exports.get = (req, res, next) => {
  conn.query(
    `SELECT count(certification) as count_certification, 
		count(org) as count_org, 
		count(work_location) as count_work_location, 
		count(type) as count_type, 
		issue_date 
        FROM db.certifications 
        group by certification, 
				 issue_date, 
                 work_location, 
                 org, 
                 type 
		HAVING issue_date != "" 
        order by issue_date ;`,
    function (err, data, fields) {
      if (err) return res.status(500).json({ log: err });
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
        columns: fields.map((elem, key) => {
          return elem["name"];
        }),
      });
    }
  );
};
