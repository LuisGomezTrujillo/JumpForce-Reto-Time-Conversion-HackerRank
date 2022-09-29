// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let horas;
        
    horas=parseInt(s[0]+s[1]);

    if ((s[8]=='A'||s[8]=='a')&&(s[9]=='M'||s[9]=='m'))
    {
        
        if (horas==12)
        {
            horas=0;
            
        }
    }
    else if ((s[8]=='P'||s[8]=='p')&&(s[9]=='M'||s[9]=='m'))
    {        
        if (horas<12)
        {
            horas=horas+12;
         
        }            
    }
    else {
        return 'error'
    }

    if (0<=horas&&horas<10){
       
       return '0'+String(horas)+s.substring(2,8);
       //return '0'+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else{
       
       return String(horas)+s.substring(2,8);
       //return s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    
    

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const s = readLine();
       const s = '08:45:00pM';

    const result = timeConversion(s);

    // ws.write(result + '\n');

    // ws.end();
    console.log(timeConversion(s));
}

main();