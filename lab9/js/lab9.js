/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 4 May, 2022
 *License: Public Domain
 */

 function init(){
 const outputEl = document.getElementById("output");
 const new1El = document.createElement("p");
 new1El.innerHTML = "I love hotdogs.";
 const new2El = document.createElement("p");
 new2El.innerHTML = "But I need fried garlic chips with it.";
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);
 new1El.style.fontFamily = "verdana";
 new2El.style.fontFamily = "verdana";
 outputEl.style.backgroundColor = "AAAAAA";
 new1El.style.fontSize = "15";
 new2El.style.fontSize = "15";
 outputEl.style.minHeight = "110px";
 const new3El = document.createElement("button");
 new3El.innerHTML = "Press me to check out why I said these!";
 new3El.addEventListener("click",goToURL);
 outputEl.appendChild(new3El);
}

function goToURL(){
  window.location.href = "https://www.sweetandsavorybyshinee.com/garlic-chips/#:~:text=Why%20you'll%20love%20this%20recipe%3A,-Calling%20all%20garlic&text=Crispy%20and%20nutty%2C%20these%20fried,easy%20and%20quick%20to%20make!";
}
