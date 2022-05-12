/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 10 May, 2022
 *License: Public Domain
 */

function init(){
  $(document).ready(function() {
  //setting up jQuery
    var challengeButton = $('<button class="button">Challenge</button>');
    // creating the button
    $('#challenge').append(challengeButton);
    //appending the button
    challengeButton.on('click',function(){
      $(this).parent().toggleClass('special')
    });
    //adding the toggleClass function with click

    var problemsButton = $('<button class="button">Problems</button>');
    // creating the button
    $('#problems').append(problemsButton);
    //appending the button
    problemsButton.on('click',function(){
      $(this).parent().toggleClass('special')
    });
    //adding the toggleClass function with click

    var resultsButton = $('<button class="button">Results</button>');
    // creating the button
    $('#results').append(resultsButton);
    //appending the button
    resultsButton.on('click',function(){
      $(this).parent().toggleClass('special')
    });
    //adding the toggleClass function with click

    var donotpressme = $('<button class="button">Do Not Press Me</button>');
    //creating the button
    $('#output').append(donotpressme);
    donotpressme.on('click',function(){
      isaiddonot.addClass('special');
      donotpressme.removeClass('special');
    //adding special class for the other button while removing it on itself
    });


    var isaiddonot = $('<button class="button">I said do not!</button>');
    //creating the button
    $('#output').append(isaiddonot);
    isaiddonot.on('click',function(){
      donotpressme.addClass('special');
      isaiddonot.removeClass('special');
    //adding special class for the other button while removing it on itself
    });
   });
}
