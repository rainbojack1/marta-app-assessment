require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public/")); 

const url = 'http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus'; 
const busesArr = [];

const getMartaInfo = async () => { 
    try {
        return await axios.get(url);
    }
    catch (err){
        console.error(err);
    }
}

const busData = async() => {
    //Get the bus data from MARTA
    const info = await getMartaInfo();
    
    //Make an object to hold the specific pieces of code that I want to retrieve from MARTA and save to an array  
    for (let x in info.data) {
        let bus = {};
        bus.route = info.data[x].ROUTE;
        bus.lat = info.data[x].LATITUDE;
        bus.long = info.data[x].LONGITUDE;
        bus.time = info.data[x].TIMEPOINT;
        busesArr.push(bus);        
    }
    console.log(JSON.stringify(busesArr));
    // console.log(busesArr);
}

// Displays all bus data from MARTA
app.get("/api/all-buses", function(req, res) {
    return res.json(busesArr); 
});


//Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    busData();
});

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });