/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 30 May, 2022
 *License: Public Domain
 */
 function getAndPutData(comicNumber){
 $("#output").empty();
 $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/" + comicNumber + "/info.0.json",
    // The data to send (will be converted to a query string)
    //data: {
            // here is where any data required by the api
            //   goes (check the api docs)
      //      id: 123,
        //    api_key: "blahblahblah",
          //},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        var comicObj = data;
        var title = "<h1>" + comicObj.title + "</h1>";
        $("#output").append(title);
        var previousButton = $("<button>").text("Previous").click(function(){getAndPutData(comicNumber - 1)});
        $("#output").append(previousButton);
        var nextButton = $("<button>").text("Next").click(function() {getAndPutData(comicNumber + 1)});
        $("#output").append(nextButton);
        var img = '<img src = "' + comicObj.img + '" alt = "'+ comicObj.alt +'" title = "' + comicObj.alt +'"/>';
        $("#output").append(img);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })
  }
    getAndPutData(122);
