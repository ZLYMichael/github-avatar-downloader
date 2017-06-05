var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ZLYMichael";
var GITHUB_TOKEN ="1fe7d58e91f4042d4414d6fe094f87c020177178";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL ='https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName +'/contributors';
  request.get('https://api.github.com/repos/jquery/jquery/contributors')
  console.log(requestURL);

}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("errors:", err);
  console.log("Result:", result)
});

