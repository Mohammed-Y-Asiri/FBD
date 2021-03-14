const timestamp = 1615731665

const milliseconds = timestamp * 1000               // convert it to milliseconds

const date = new Date(milliseconds)                 // create a date object

const universalTime = date.toUTCString()            // get the Universal Time Coordinate  
                                                    // 'Sun, 14 Mar 2021 14:21:05 GMT'

console.log(universalTime+"\n")

var wD = date.toUTCString().substring(0,3)     // substring the wanted data
var d = date.toUTCString().substring(5,7)
var m = date.toUTCString().substring(8,11)
var y = date.toUTCString().substring(12,16)


var humanDate = {                                   // save the data in object 'humanDate'
    weekDay : wD,
    day : d,
    month : m,
    year : y
}

console.log("The day today is : "+humanDate.weekDay+", "+humanDate.year+"-"+humanDate.month+"-"+humanDate.day)