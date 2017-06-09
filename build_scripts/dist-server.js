import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


const port = 8001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(request,response){
	response.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users', function(request,response){
	response.json([
		{"id":1, "firstName": "Dhruv", "lastName": "Thukral", "email": "dhruv@amazon.com"},
		{"id":2, "firstName": "Fluffy", "lastName": "Cat", "email": "cat@amazon.com"},
		{"id":3, "firstName": "Alexa", "lastName": "Echo", "email": "alexa@amazon.com"}
	]);
});

app.listen(port, function(error){
	if(error){
		console.log(error);
	} else{
		open('http://localhost:'+port);
	}
});
