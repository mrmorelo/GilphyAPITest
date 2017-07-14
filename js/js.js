$( document ).ready(function(){

// Construct the URL
$('#searchButton').on('click', function(e){
  $('.searchResultField').empty();
  e.preventDefault();

var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + $('#userQuery').val() +  "&api_key=8daec3540b0047efaa2568176c2c3419" + "&limit=24";

 var q = $('#userQuery').val();

// Part 2 - Call API
$.ajax(
{
  type: 'GET',
  url: queryURL,
  success:function(response){

  // This is the API response data. It's a   JSON object of 24 gifs
console.log(response.data);


response.data.forEach(function(x) {
  var giphyURL = x.images.fixed_height.url;
    console.log(giphyURL);

  var imageResult = $('<div class="sResult col-xs-6 col-sm-4 col-md-3 col-lg-2"><div class="loader"></div><img src=' + giphyURL + ' /></div>');
  imageResult.appendTo($('.searchResultField'));

  });

  $('#reset_button').on('click', function(){
    // Grab the img using the id and change the src to empty to remove the image
    $('.searchResultField').empty();
  });

  $('.search-text').html('<p>Search result for ' + q + '</p>');

  }
});

});

});
