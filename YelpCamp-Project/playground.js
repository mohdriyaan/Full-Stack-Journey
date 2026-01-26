if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}


const mapTilerClient = require("@maptiler/client")
mapTilerClient.config.apiKey = process.env.MAPTILER_API_KEY


const findCoordinates = async()=>{
    const geoData = await mapTilerClient.geocoding.forward("Los Angeles")
    console.log(geoData.features[0])
}

findCoordinates()
