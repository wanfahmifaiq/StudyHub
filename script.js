// StudyHub Article Database

const articles = [

{
title: "What is TCP/IP? Complete Beginner Guide",
description: "Learn how TCP/IP works and why it is important for the Internet.",
link: "articles/tcp-ip.html",
category: "Computer Networks",
keywords: "tcp ip internet protocol networking"
},

{
title: "OSI Model Explained",
description: "Understand all seven layers of the OSI Model.",
link: "#",
category: "Computer Networks",
keywords: "osi networking layers"
},

{
title: "TCP vs UDP",
description: "Compare TCP and UDP with examples.",
link: "#",
category: "Computer Networks",
keywords: "tcp udp"
},

{
title: "Java ArrayList Tutorial",
description: "Learn Java ArrayList with examples.",
link: "#",
category: "Programming",
keywords: "java arraylist"
},

{
title: "Integration Formula Guide",
description: "Important integration formulas for students.",
link: "#",
category: "Mathematics",
keywords: "integration calculus"
}

];




// Homepage Search Button

function search(){


let keyword = 
document.getElementById("search").value;


if(keyword.trim()==""){

alert("Please enter something to search");

return;

}


window.location.href =
"search.html?query=" + keyword;


}







// Load Search Results Page

function loadSearch(){


let params =
new URLSearchParams(window.location.search);


let query =
params.get("query");



if(!query){

return;

}



query =
query.toLowerCase();



let results = "";



articles.forEach(article=>{


if(
article.title.toLowerCase().includes(query)
||
article.keywords.includes(query)
){


results += `


<div class="card">


<h3>

<a href="${article.link}">

${article.title}

</a>

</h3>


<p>

${article.description}

</p>


</div>


`;


}


});



if(results==""){

results =
"<h3>No results found</h3>";

}



document.getElementById("results").innerHTML =
results;


}







// Mobile Menu

function toggleMenu(){

let menu =
document.getElementById("navMenu");


menu.classList.toggle("active");

}





// Dark Mode

function darkMode(){

document.body.classList.toggle("dark");

}






// Run search when search page opens

if(
document.getElementById("results")
){

loadSearch();

}


function loadLatestArticles(){

const container =
document.getElementById("latestArticles");

if(!container) return;

let html="";

articles.forEach(article=>{

html += `

<div class="card">

<h3>

<a href="${article.link}">

${article.title}

</a>

</h3>

<p>${article.description}</p>

<p><strong>${article.category}</strong></p>

</div>

`;

});

container.innerHTML = html;

}

loadLatestArticles();