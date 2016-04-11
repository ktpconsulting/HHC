var baseUrl = 'https://api.tumblr.com/v2/blog/hiphopcongress.tumblr.com';
var apiKey = '8uVaNrymLPu7qv0ue4MBnLinAo778TkzI21EoigjSHtSBbLKKc';

function getPosts (cb) {
  $.getJSON(baseUrl+'/posts?callback=?',{ // make HTTP GET request to tumblr REST API
      api_key: apiKey
  },function (res) {
    return cb(res.response);
  });
}

function appendPost (post, selector) {
  if (post.photos) {
    $(selector).append('<div class="row 50% uniform"><div class="12u$"><span class="image fit blog" id="blogpics"><img src="'+post.photos[0].alt_sizes[0].url+'"/></span></div></div>');
    $(selector).append('<p id="captiontext">'+post.caption+'</p>');
  } else {
    $(selector).append('<h2>'+post.title+'</h2>');
    $(selector).append(post.body);
  }
}


getPosts(function (posts) {
  var posts = posts['posts'];

  for (var i=0;i<posts.length;i++) { // add the html for each blog post
    var post = posts[i];
    if (window.location.pathname === '/events' && post.tags.indexOf('event') !== -1) {
      appendPost(post, '#eventscontainer');
    } else if (window.location.pathname === '/blog' && post.tags.indexOf('event') === -1) {
      appendPost(post, '#blogcontainer');
    }
  }
})

//
// <div class="row 50% uniform">
//   <div class="12u$"><span class="image fit">
