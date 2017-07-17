$( document ).ready(function(){

// Construct the URL
$('#searchButton').on('click', function(e){
  // Grab the img using the id and change the src to empty to remove the image
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

  var giphySlug = x.slug;
    console.log(giphySlug);

    var giphyUrl = x.url;
    console.log(giphyUrl);


    var imageResult = $('<div tabindex="0" role="treeitem" aria=haspopup="true" class="sResult col-xs-6 col-sm-4 col-md-3 col-lg-2"><div class="loader"></div><img alt=" '+ q +' '+ giphySlug +' " src=' + giphyURL + ' /><p>URL: <a role="link" href='+ giphyUrl +'>' + giphyUrl + '</a></p></div>');
    imageResult.appendTo($('.searchResultField'));

  });

  $('.search-text').html('<p>Search result for ' + q + '</p>');

  }
});

});

$(document).on('keyup', '.sResult',function(e){
    if(e.which==13 || e.which==32){
      $( this ).toggleClass( "fullScreen" );
      $("html, body").animate({ scrollTop: 0 }, "300");
      }
})

$(document).on('click', '.sResult', function() {
  $( this ).toggleClass( "fullScreen" );
  $("html, body").animate({ scrollTop: 0 }, "300");
});

});
