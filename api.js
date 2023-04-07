const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

/**
 * Serve Static Content
 */
app.get("/", (req,res)=>{
   res.sendFile('index.html')
})


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
