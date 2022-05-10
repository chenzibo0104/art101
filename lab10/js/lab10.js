/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 10 May, 2022
 *License: Public Domain
 */

 function sortUserName() {
   //to take user input
   var userName = document.getElementById("user-name").value;
   console.log("userName =", userName);
   //split string to array
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   //sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   //join array back to string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =",nameSorted);
   var nameToUpperCase = nameSorted.toUpperCase('');
   console.log("nameToUpperCase =",nameToUpperCase);
   //this convert all the strings to uppercase
   return nameToUpperCase;
 }


  function init(){
    let Username = document.getElementById("my-button");
    //This links the button to the function
    Username.addEventListener('click', event => {
      sortUserName();
    //This makes the button triggers function sortUserName
  const outputEl = document.getElementById("output");
    //This declares a new constent called outputEl
  const new1El = document.createElement("p");
    //This adds a new paragraph elements to outputEl
  new1El.innerHTML = "Call yourself: " + sortUserName();
  outputEl.appendChild(new1El);
    //And we display the results!
  let Haha = document.getElementById("my-button2");
    Haha.addEventListener("click",goToURL);
    });
  }

  function goToURL(){
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
