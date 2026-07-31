const units = {

length:[

"Meter",
"Kilometer",
"Centimeter",
"Millimeter",
"Inch",
"Foot",
"Mile"

],


weight:[

"Kilogram",
"Gram",
"Pound",
"Ounce"

],


temperature:[

"Celsius",
"Fahrenheit",
"Kelvin"

]

};



window.onload=function(){

changeUnits();

};





function changeUnits(){


let category =
document.getElementById("category").value;


let from =
document.getElementById("fromUnit");


let to =
document.getElementById("toUnit");


from.innerHTML="";
to.innerHTML="";



units[category].forEach(unit=>{


let option1 =
document.createElement("option");


option1.text=unit;


from.add(option1);



let option2 =
document.createElement("option");


option2.text=unit;


to.add(option2);


});


}







function convertUnit(){


let category =
document.getElementById("category").value;



let value =
parseFloat(
document.getElementById("value").value
);



let from =
document.getElementById("fromUnit").value;



let to =
document.getElementById("toUnit").value;



let result;



if(category=="length"){


let meter;



switch(from){

case "Meter":
meter=value;
break;

case "Kilometer":
meter=value*1000;
break;

case "Centimeter":
meter=value/100;
break;

case "Millimeter":
meter=value/1000;
break;

case "Inch":
meter=value*0.0254;
break;

case "Foot":
meter=value*0.3048;
break;

case "Mile":
meter=value*1609.34;
break;

}



switch(to){

case "Meter":
result=meter;
break;

case "Kilometer":
result=meter/1000;
break;

case "Centimeter":
result=meter*100;
break;

case "Millimeter":
result=meter*1000;
break;

case "Inch":
result=meter/0.0254;
break;

case "Foot":
result=meter/0.3048;
break;

case "Mile":
result=meter/1609.34;
break;

}


}




else if(category=="weight"){


let kg;


switch(from){

case "Kilogram":
kg=value;
break;

case "Gram":
kg=value/1000;
break;

case "Pound":
kg=value*0.453592;
break;

case "Ounce":
kg=value*0.0283495;
break;

}



switch(to){

case "Kilogram":
result=kg;
break;

case "Gram":
result=kg*1000;
break;

case "Pound":
result=kg/0.453592;
break;

case "Ounce":
result=kg/0.0283495;
break;

}


}





else if(category=="temperature"){


if(from=="Celsius" && to=="Fahrenheit")
result=(value*9/5)+32;


else if(from=="Fahrenheit" && to=="Celsius")
result=(value-32)*5/9;


else if(from=="Celsius" && to=="Kelvin")
result=value+273.15;


else if(from=="Kelvin" && to=="Celsius")
result=value-273.15;


else
result=value;


}



document.getElementById("result").innerHTML=

value+" "+from+" = <strong>"+

result.toFixed(4)

+"</strong> "+to;


}