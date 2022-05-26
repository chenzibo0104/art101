/*
 *Author: Zibo Chen, Stephen Wei
 *Create: 25 May, 2022
 *License: Public Domain
 */
 function activate(){
   $.ajax({
    // The URL for the request (from the api docs)
    url: "http://www.yerkee.com/api/fortune/wisdom",
    // The data to send (will be converted to a query string)
  /*  data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
  */
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        document.getElementById("output").innerHTML = data.fortune;
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

 }
 function nasa(){
   $.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.nasa.gov/planetary/apod?api_key=3Efp6qD0HyNgRQSweL2dkZ7LXBCheyBz23b2dIxp",
      // The data to send (will be converted to a query string)
     data: {
              // here is where any data required by the api
              //   goes (check the api docs)
              //id: 123,
              api_key: "3Efp6qD0HyNgRQSweL2dkZ7LXBCheyBz23b2dIxp",
            },

      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log(data);
          document.getElementById("output2").innerHTML = "<img src= '"+ data.url+ "'> <br>"+data.title;
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
   }

   function init(){
     document.getElementById("activate").addEventListener("click",activate);
     document.getElementById("nasa").addEventListener("click",nasa);
   }
