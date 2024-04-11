const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/',
    headers: {
        'X-RapidAPI-Key': 'd0e494e0a5msh8332c5c46400b1bp14485ajsn21ae147c1bde',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
      }
  };

module.exports.location = async (req, res) => {
    try {
        const location =req.body.location +'/summary/';
        options.url= options.url+location; // Change to req.query.location
        console.log(options.url);
        const response = await axios.request(options);
        const { data } = response;
        return res.status(200).json({ message: data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports.test = (req, res) => {
    console.log(req.query);
    res.status(200).json({ message: "hello" });
}



module.exports.test =(req,res)=>{
    console.log(req.query);
    res.status(200).json({ message: "hello" });
}