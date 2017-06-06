var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ZLYMichael";
var GITHUB_TOKEN ="1fe7d58e91f4042d4414d6fe094f87c020177178";
var fs = require('fs');
// var owner = process.argv.slice(2)[0].toLowerCase();
var owner = process.argv[2];
var repo = process.argv[3]

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName +'/contributors';
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
      var info = JSON.parse(body)
      cb(null, info)
    }
  });
}

function downloadImageByURL(url, fileName) {
  request.get(url)
  .pipe(fs.createWriteStream('./avatars/' + fileName))
}

getRepoContributors(owner, repo, function(err, contributors) {
  if (err) {
    console.log("errors:", err);
  } else {
    for(var i of contributors) {
      downloadImageByURL(i.avatar_url, i.login + ".jpg");
    }
  }
});