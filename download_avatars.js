var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ZLYMichael";
var GITHUB_TOKEN ="1fe7d58e91f4042d4414d6fe094f87c020177178";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL ='https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName +'/contributors';

  var options = {
    url: requestURL,
    headers: {
      'User-Agent': "LHL Project"
    }
  };

  request.get(options, function(err, response, body) {
    if(err) {
      cb(err);
    } else {
      cb(null, body);
    }
  })
}


getRepoContributors("jquery", "jquery", function(err, contributors) {
  if (err) {
    console.log("errors:", err);
  } else {
    console.log("Contributors", contributors);
  }
});

