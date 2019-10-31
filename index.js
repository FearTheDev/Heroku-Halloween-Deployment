const express = require('express');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 8080
server.use(express.json());


server.get('/', (req, res) =>{
    res.status(200).send(`
    <div style="margin: 0 auto; width:100%; height:90vh; background-color:black; color:#fa8100; display:flex; flex-direction:column; justify-content:center; align-items:center; font-family:verdana;">
        <h1>HAPPY HALLOWEEN</h1>
        <p>${process.env.MSG}</p>
        <img style="width:300px;" src="https://images.fineartamerica.com/images/artworkimages/medium/1/scary-halloween-horror-pumpkin-face-philipp-rietz.jpg" />
    </div>
    <h1 align="center">Server is up and running!</h1>
    `);
});

server.listen(port, () =>{
    console.log(`Server is up and running on port ${port}`);
});