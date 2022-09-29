const horaAmPm=document.querySelector('#horaAmPm');
const btn=document.querySelector('#btnConvertirHora');
const spanResultado=document.querySelector('#resultado');

function btnOnClick(){
    let s=horaAmPm.value;
    
    main(s);
}

function timeConversion(s) {
    
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
        return 'ERROR: Ingrese la hora en formato HH:mm:ssXM'
    }

    if (0<=horas&&horas<10){       
       return '0'+String(horas)+s.substring(2,8);   
    }
    else{       
       return String(horas)+s.substring(2,8);   
    }
}

function main(s) {
    const result = timeConversion(s);    
    spanResultado.innerText=result;    
}

