function calculateSubnet(){


let ip =
document.getElementById("ip").value;


let cidr =
parseInt(document.getElementById("cidr").value);



if(!ip || !cidr){

alert("Please enter IP and CIDR");

return;

}



let mask =
(0xffffffff << (32-cidr)) >>> 0;



let octets =
ip.split(".").map(Number);



let ipNumber =
(octets[0]<<24)
|
(octets[1]<<16)
|
(octets[2]<<8)
|
octets[3];



let network =
(ipNumber & mask) >>>0;



let broadcast =
(network | (~mask)) >>>0;



function convert(num){

return [

(num>>>24)&255,

(num>>>16)&255,

(num>>>8)&255,

num&255

].join(".");

}



document.getElementById("result").innerHTML = `


<h3>Results</h3>

<p>
Subnet Mask:
${convert(mask)}
</p>


<p>
Network Address:
${convert(network)}
</p>


<p>
Broadcast Address:
${convert(broadcast)}
</p>


<p>
Usable Hosts:
${Math.pow(2,32-cidr)-2}
</p>


`;

}