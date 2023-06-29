document.getElementById("button1").onclick=tempResult;
document.getElementById("button2").onclick=clearResult;

function clearResult(){
    document.getElementById('v').innerHTML="";
    document.getElementById("temp1").value='';
    document.getElementById("temp2").value='';
    document.getElementById("unit1").value='';
    document.getElementById("unit2").value='';
}
function tempResult(){
    const temp1=document.getElementById("temp1");
let temp2=document.getElementById("temp2");
const unit1=document.getElementById("unit1");
const unit2=document.getElementById("unit2");
const te1=document.getElementById("temp1").value;
// temp1.addEventListener("keyup",tempResult);
// temp2.addEventListener("keyup",tempResult);
// unit1.addEventListener("change",tempResult);
// unit2.addEventListener("change",tempResult);
if(isNaN(te1))
{
   
    document.getElementById('k').innerHTML="! -- Input Only Number in field -- !";
}
else{
    let temp=0;
    let t1=parseFloat(temp1.value);
    if(unit1.value==="celsius"&& unit2.value==="celsius"){
        temp2.value=temp+t1;
        document.getElementById('v').innerHTML="℃";
        
    }
    if(unit1.value==="celsius"&& unit2.value==="fahrenheit"){
        temp2.value=((temp+t1)*9)/5+32;
        document.getElementById('v').innerHTML="℉";
    }
    if(unit1.value==="celsius"&& unit2.value==="kelvin"){
        temp2.value=(((temp+t1)+273.15));
        document.getElementById('v').innerHTML="K";
    }
    if(unit1.value==="fahrenheit"&& unit2.value==="celsius"){
        temp2.value=((temp+t1-32)*5)/9;
        document.getElementById('v').innerHTML="℃";
    }
    if(unit1.value==="fahrenheit"&& unit2.value==="fahrenheit"){
        temp2.value=temp+t1;
        document.getElementById('v').innerHTML="℉";
    }
    if(unit1.value==="fahrenheit"&& unit2.value==="kelvin"){
        temp2.value=(((temp+t1-32)*5)/9+273.15);
        document.getElementById('v').innerHTML="K";
    }
    if(unit1.value==="kelvin"&& unit2.value==="celsius"){
        temp2.value=((temp+t1-273.15));
        document.getElementById('v').innerHTML="℃";
    }
    if(unit1.value==="kelvin"&& unit2.value==="fahrenheit"){
        temp2.value=((temp+t1-273.15)*9)/5+32;
        document.getElementById('v').innerHTML="℉";
    }
    if(unit1.value==="kelvin"&& unit2.value==="kelvin"){
      
        temp2.value=temp+t1;
        document.getElementById('v').innerHTML="K";
    }
}
   
}