/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 16 May, 2022
 *License: Public Domain
 */

function init(){
 function sortingHat(str){
   len = str.length;
   mod = len % 4;
   if(mod == 0){
     return"Gryffindor"
   }
   else if (mod == 1){
     return"Ravenclaw"
   }
   else if (mod == 2){
     return"Slytherin"
   }
   else if (mod == 3){
     return"Hufflepuff"
   }
 }
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function(){
   var name = document.getElementById("input").value;
   var house = sortingHat(name);
   newText = "<p>The Sorting Hat has sorted you into:" + house + "</p>";
   document.getElementById("output").innerHTML = newText;
   const outputEl = document.getElementById("output");
   const new1El = document.createElement("p");
   new1El.innerHTML = "Gryffindor was one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, nerve and determination, to be sorted into his house.";
   const new2El = document.createElement("p");
   new2El.innerHTML = "Ravenclaw was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours. The Head of Ravenclaw was Filius Flitwick, and the House ghost was the Grey Lady, real name Helena Ravenclaw, daughter of Rowena.";
   const new3El = document.createElement("p");
   new3El.innerHTML = "Slytherin was one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics included cunning, resourcefulness, leadership, and ambition.";
   const new4El = document.createElement("p");
   new4El.innerHTML = "Hufflepuff was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members.";
   if (mod == 0){
   outputEl.appendChild(new1El);
   }
   if (mod == 1){
   outputEl.appendChild(new2El);
   }
   if (mod == 2){
   outputEl.appendChild(new3El);
   }
   if (mod == 3){
   outputEl.appendChild(new4El);
   }
  });

}
