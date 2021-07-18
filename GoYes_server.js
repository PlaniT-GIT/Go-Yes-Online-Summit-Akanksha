var express = require('express');
var app = express();
const path = require('path');

//app.use(express.static(path.join(__dirname,'PlanIT')));
app.use('/', express.static(__dirname + '/'));
app.use('/Pages', express.static(__dirname + '/Pages'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/index.html', function(req,res)
{
	res.sendFile(__dirname+"/"+"index.html");
});

app.get('/Pages/inner-page.html', function(req,res)
{	
	res.sendFile(__dirname+"/"+"inner-page.html");
});

var server=app.listen(8085,'192.168.43.36', function()
{
	var host = server.address().address;
	var port = server.address().port;
	console.log("Go-Yes-Online-Summit app listening at http://%s:%s",host,port);	
	console.log(__dirname);
	console.log(__dirname+"/Pages/inner-page.html");
}); 