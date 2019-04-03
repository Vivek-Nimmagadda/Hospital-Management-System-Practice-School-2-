var express = require('express');
var bodyParse = require('body-parser');
var mysql = require('mysql');
//Change this
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root', //here
	password: 'root', //here
	database: 'VSGH'
});

connection.connect();

connection.query('SELECT * from users;', function (err, rows, fields) {
	if (!err)
		console.log('dbWorking!');
	else
		console.log(err);

});


var app = express();
app.use(bodyParse());

app.get('/', function (req, res) {
	res.send('Nothing here just a simple api! -- Vivek');
});

app.get('/users', function (req, res) {
	connection.query("SELECT * FROM users", function (err, rows, fields) {
		if (err) {
			console.log(err);
		} else {
			var data = "";
			data = rows;
			res.send(data);
		}
	});
});

app.post('/users', function (req, res) {
	console.log(req.body);
	var name = req.body.name;
	var email = req.body.email;
	var comments = req.body.comments;
	var fname = req.body.fname;
	var lname = req.body.lname;
	var admission_dt = req.body.admission_dt;
	var discharge_dt = req.body.discharge_dt;
	var patient_regn_no = req.body.patient_regn_no;
	var review_required = req.body.review_required;
	var review_required_days = req.body.review_required_days;
	var ds_file_name = req.body.ds_file_name;
	var ds_summary_file = req.body.ds_summary_file;
	var ref_no = req.body.ref_no;
	var doctor_name = req.body.doctor_name;
	var specialization = req.body.specialization;
	var advice = req.body.advice;
	var query = "INSERT INTO users VALUES('" + name + "', '" + email + "', '" + comments + "', '" + fname + "', '" + lname + "', '" + admission_dt + "', '" + discharge_dt + "', '" + patient_regn_no + "', '" + review_required + "', '" + review_required_days + "', '" + ds_file_name + "', '" + ds_summary_file + "', '" + ref_no + "', '" + doctor_name + "', '" + specialization + "', '" + advice + "')";
	console.log(query);
	connection.query(query, function (err, rows, fields) {
		if (err) {
			console.log(err);
			res.send('Fails');
		} else {
			res.send('Save Success!');
		}
	});
});

app.listen(3000, function () {
	console.log('Listenting on port localhost:3000');
});