var parser = require('xml2json');
var path = require('path');
var fs = require('fs').promises;    
require('jsdom-global')();
global.DOMParser = window.DOMParser;
const main = async() =>{
    const filePath = path.join(__dirname, '../test/test.gpx');
    const data = await fs.readFile(filePath, "utf8");
console.log(data)
        let domParser = new window.DOMParser();
    const xmlSource = domParser.parseFromString(data, 'text/xml');
    console.log(xmlSource)
    const json = parser.toJson(data);
    console.log(json)
     console.log(JSON.parse(json).gpx.creator)


}




main()