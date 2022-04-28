/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 27 April, 2022
 *License: Public Domain
 */

 function sortUserName() {
   //to take user input
   var userName = window.prompt("Hi, my name is the GREAT SDFEWWE, your name sucks so please let me help you get a new one, enter your current name here.");
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
 //output
 document.writeln("You can now proudly call yourself the GREAT ",
   sortUserName(), "</br>");
