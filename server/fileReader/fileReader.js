const fs = require('fs');


module.exports = {
    findFile(fileName){
        // console.log(__dirname)
        try{
            var array = fs.readFileSync(`./lyrics/${fileName}.txt`).toString().split('\n');
            if(!array) throw Error("No associated files found")
            return array;
        }catch(e){
            console.log(`No file for ${fileName}, need to reasses user input`)
        }
       
    }
    
}
