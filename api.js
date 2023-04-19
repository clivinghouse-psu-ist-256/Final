const express = require('express');
const path = require('path');
var cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

let corsOptions = {
	origin : ['http://localhost:4200'],
 }

app.options(cors(corsOptions)) 


app.get('/image/:name',cors(corsOptions), (req, res) => {
	fileName = '/Images/'+req.params.name;
	console.log(fileName)
	// if (!fs.existsSync(fileName)) {
    //     console.log("no dir ");
    //     res.send(404);
	// 	return
    // }
	console.log(fileName)
    res.sendFile(fileName,{root: '.'})
});

app.get('/upc',cors(corsOptions),(req,res)=>{
	//console.log(req)
	search=req.query.search;
	
	coffees= JSON.parse(fs.readFileSync('./coffies.json','utf8'))
	sendresp=coffees.filter(function(coffees){
		return coffees.upc == search
	})
	res.send(sendresp)
})
app.get('/all',cors(corsOptions),(req,res)=>{
	coffees= JSON.parse(fs.readFileSync('./coffies.json','utf8'))
	res.send(coffees)
})
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
