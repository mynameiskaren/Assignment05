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
//document.getElementById("clickMe").addEventListener("click", function(){
//    window.alert("Step 4 - I have been clicked");
//});


//////////////////	Step 5	//////////////////
// On HTML Page


//////////////////	Step 6	//////////////////
//document.getElementById("redirect").addEventListener("click", function(){
//	window.alert("Step 6 - You are redirecting to a new page.");
//	event.preventDefault();
//});


//////////////////	Step 7	//////////////////
//function myfunction() { 
//	var first = document.getElementById("textbox").value;
//	window.alert(first);
// } 


//////////////////	Step 8	and Step 9 //////////////////
//function myFunction() {
//    var myWindow = window.open("newpage.html", "New Page", "width=300,height=300");
//}
//function start(){
//	timer = setInterval(function(){ 
//		document.getElementById("write").innerHTML += "Learning Javascript is fun!<br>"; 
//	}, 2000);
//}
//function stop(){
//	clearInterval(timer);
//
//}

//////////////////	Step 10	//////////////////
//function display() {
//    alert(document.getElementById("list").value);
//}
