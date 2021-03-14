
getBTCData()

//The function will run for 30 seconds
setTimeout(function(){process.exit()},30000)

function getBTCData()
{
    try
    {
        //retreiving the data from 'api.nomics.com'
        const fetch = require("node-fetch");
        fetch("https://api.nomics.com/v1/currencies/ticker?key=cfa8efe9876fb4328c7d6c73b1fd2f9b&ids=BTC&convert=SAR")
        .then(response => response.json())
        .then(data => 
            {
                //In each call, the function will print up-to-date data
                //the price might seem repeatitive because the API provider is not updating the price each 1 second
                console.log("Currency: "+data[0]['name']+", Price: "+data[0]['price']);
            })

        //Calling the function every 1 seconds
        setTimeout(getBTCData,1000)
    }
    catch(e){console.log(e)}    
}
