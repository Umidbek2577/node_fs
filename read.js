const fs = require('fs')

function bazz(error , buffer){
    let s = buffer.toString()

    console.log('DATA:',s);
    console.log('ERROR:',error);
}

fs.readFile ('files.js',bazz)