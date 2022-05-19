/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 18 May, 2022
 *License: Public Domain
 */

$(document).ready(function() {
  $("#output").append("<table>" );
 for (i=1; i <= 200; i++) {
    if (i%10 == 1){
      $("#output").append("<tr>" );
    }
    if (i%10 == 2){
      $("#output").append("</tr>" );
    }
    var str = i;
    if (i%15 == 0) {
      console.log("FizzBuzz!");
      str += "  FizzBuzz!";
      $("#output").append("<td>" + str + "</td>");
    }
    else if (i%11 == 0){
      console.log("Duang!");
      str += "  Duang!";
      $("#output").append("<td>" + str + "</td>");
    }
    else if (i%33 == 0){
      console.log("FizzDuang!");
      str += "  FizzDuang!";
      $("#output").append("<td>" + str + "</td>");
    }
    else if (i%55 == 0){
      console.log("BuzzDuang!");
      str += "  BuzzDuang!";
      $("#output").append("<td>" + str + "</td>");
    }
    else if (i%77 == 0){
      console.log("BoomDuang!");
      str += "  BoomDuang!";
      $("#output").append("<td>" + str + "</td>");
    }
    else if (i%165 == 0){
      console.log("FizzBuzzDuang!");
      str += "  FizzBuzzDuang!";
      $("#output").append("<td>" + str + "</td>");
    }
    else if (i%3 == 0) {
        console.log("Fizz!");
        str += "  Fizz!";
        $("#output").append("<td>" + str + "</td>");
    }
     else if (i%5 == 0) {
        console.log("Buzz!");
        str += "  Buzz!";
        $("#output").append("<td>" + str + "</td>");
    }
    else if(i%7 == 0){
        console.log("Boom!");
        str += "  Boom!";
        $("#output").append("<td>" + str + "</td>");
    }
    else if(i%21 == 0){
        console.log("FizzBoom!");
        str += "  FizzBoom!";
        $("#output").append("<td>" + str + "</td>");
    } else if (i%35 == 0){
        console.log("BuzzBoom!");
        str += "  BuzzBoom!";
        $("#output").append("<td>" + str + "</td>");
    } else {
      console.log(i);
      $("#output").append("<td>" + str + "</td>");
    }
     }
     $("#output").append("</table>" );
 });
