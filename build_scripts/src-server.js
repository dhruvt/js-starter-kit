import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
	noInfo:true,
	publicPath: config.output.publicPath
}));


app.get('/', function(request,response){
	response.sendFile(path.join(__dirname,'../src/index.html'));
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
