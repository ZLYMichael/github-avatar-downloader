var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  request.get('https://api.github.com/repos/jquery/jquery/contributors')
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("errors:", err);
  console.log("Result:", result)
});