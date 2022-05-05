/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 4 May, 2022
 *License: Public Domain
 */

//Create a function
 function init(){
//Find the target element where we want to put it
 const outputEl = document.getElementById("output");
//Create a new <p> element
 const new1El = document.createElement("p");
//Set the text of the element
 new1El.innerHTML = "I love hotdogs.";
//Create a new <p> element
 const new2El = document.createElement("p");
 //Set the text of the element
 new2El.innerHTML = "But I need fried garlic chips with it.";
//Insert the new element at the bottom of the target element
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);
//modify the CSS properties of elements
 new1El.style.fontFamily = "verdana";
 new2El.style.fontFamily = "verdana";
 outputEl.style.backgroundColor = "AAAAAA";
 new1El.style.fontSize = "15";
 new2El.style.fontSize = "15";
 outputEl.style.minHeight = "110px";
//Create a new <p> element
 const new3El = document.createElement("button");
//Set the text of the element
 new3El.innerHTML = "Press me to check out why I said these!";
//Create a "click" button
 new3El.addEventListener("click",goToURL);
//Insert the new element at the bottom of the target element
 outputEl.appendChild(new3El);
}
//Link an URL
function goToURL(){
  window.location.href = "https://www.sweetandsavorybyshinee.com/garlic-chips/#:~:text=Why%20you'll%20love%20this%20recipe%3A,-Calling%20all%20garlic&text=Crispy%20and%20nutty%2C%20these%20fried,easy%20and%20quick%20to%20make!";
}
