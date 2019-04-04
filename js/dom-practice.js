/*eslint-env browser*/

/************************************************
** Practice with Forms and the DOM Event Model **
************************************************/



//////////////////	Step 1	//////////////////
// function clickMe(){
//    window.alert("Step 1 - I have been clicked");
//}


//////////////////	Step 2	//////////////////
//window.onload = function(){
//    var element = document.getElementById("clickMe");
//    element.onclick = function(){
//        window.alert("Step 2 - I have been clicked");
//    }
//}


//////////////////	Step 3	//////////////////
//window.onload = function(){
//    var element = document.getElementById("clickMe").onclick = function(){
//        window.alert("Step 3 - I have been clicked");
//    }
//}

//////////////////	Step 4	//////////////////
//window.onload = function(){
//    document.getElementById("clickMe").addEventListener("click", function(){
//        window.alert("Step 4 - I have been clicked");
//    });
//}

//////////////////	Step 5	//////////////////
// On HTML Page


//////////////////	Step 6	//////////////////
//function init() {
//    "use strict";
//    var link = window.document.getElementById("redirect");
//    link.addEventListener("click", function (e) {
//        e.preventDefault();
//        window.alert("You clicked the link. Preventing Redirection.");
//    });
//}
//window.addEventListener("load", init);

//////////////////	Step 7	//////////////////
//function myfunction() { 
//	var first = document.getElementById("textbox").value;
//	window.alert(first);
// } 


//////////////////	Step 8 //////////////////
//function init() {
//    "use strict";
//    var btnLink = window.document.getElementById("newPage");
//    btnLink.addEventListener("click", function () {
//        window.open("newpage.html", "newPage", "width=300,height=300");
//    });
//}
//window.addEventListener("load", init);


//////////////////   Step 9 //////////////////
//window.addEventListener("load", init, false);
//function init() {
//    "use strict";
//    startButton.addEventListener("click", function theText() {
//        "use strict";
//        var freeze = setInterval(theText, 2000);
//        window.console.log("Learning JavaScript is fun!");
//        
//    stopButton.addEventListener("click", function theText() {
//        window.clearInterval(freeze);
//    });    
//}, false);
//}


//////////////////	Step 10	//////////////////
//function display() {
//    alert(document.getElementById("list").value);
//}
