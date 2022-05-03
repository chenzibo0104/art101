/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 2 May, 2022
 *License: Public Domain
 */

 function isOdd(x){
    return(x % 2 != 0);
}

console.log("Is 1 odd?", isOdd(1));
console.log("Is 12 odd?", isOdd(12));
console.log("Is 7 odd?", isOdd(7));
console.log("Is 100 odd?", isOdd(100));

array = [4, 6, 66, 77, 99, 1833, 172738]
console.log("My array", array);

var result = array.map(isOdd);
console.log("Test of oddness of array", result);

var result2 = array.map(function(x){
  return x ** 2;
})
console.log("Test of oddness of array:", result);

function init(){
  var contentDIV = document.getElementById("content");
  var oldContent = contentDIV.innerHTML;
  var newContent = oldContent + "<p>My Original Array is [" + array.join() + "]</p>" + "<p>Are they Odd Numbers? [" + result.join() + "]</p>" + "<p> How about we Square them? [" + result2.join() + "]</p>";
  contentDIV.innerHTML = newContent;
}
