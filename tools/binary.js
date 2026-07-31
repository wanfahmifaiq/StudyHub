function binaryToDecimal(){

let binary =
document.getElementById("binary").value.trim();

if(binary==""){

alert("Please enter a binary number");

return;

}

if(!/^[01]+$/.test(binary)){

alert("Binary can only contain 0 and 1.");

return;

}

let decimal =
parseInt(binary,2);

document.getElementById("output").innerHTML =

binary + " (Binary) = <strong>" +

decimal +

"</strong> (Decimal)";

}



function decimalToBinary(){

let decimal =
document.getElementById("decimal").value.trim();

if(decimal==""){

alert("Please enter a decimal number");

return;

}

let binary =
parseInt(decimal).toString(2);

document.getElementById("output").innerHTML =

decimal + " (Decimal) = <strong>" +

binary +

"</strong> (Binary)";

}