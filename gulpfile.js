var gulp = require('gulp');
var http = require('http');
var yaml = require('yamljs');
var fs = require('atomic-write');
var gravatar = require('gravatar');
var shell = require('gulp-shell');

var paths = {
source: '_site',
deploy: 'dist'
};

// build jekyll
gulp.task('jekyll', function() {
return gulp.src('', {quiet: false})
.pipe(shell([
'rm -rf ' + paths.deploy,
'jekyll build',
'cp -R _site/ ' + paths.deploy
]));
});

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task("comments", function() {
  
  var options = {
    hostname: 'pooleapp.com',
    port: 80,
    path: '/data/bc363968-9e43-48b0-bde0-77a45175591e.json',
    method: 'GET'
  };

  http.get(options, function(res) {
    var body = '';
    res.on('data', function(chunk) {
        body += chunk;
    });
    res.on('end', function() {
      var comments = JSON.parse(body);

      // add gravatar image links if available
      for (var i = 0; i < comments.sessions.length; i++) {
        comments.sessions[i].avatar = gravatar.url(comments.sessions[i].email, {s: '50', r: 'pg'});
        // if(statusCode === 404)
        // http.get(function(avatar, function(res)){
        // 	// res.statusCode(avatar);
        // });
        // var status ="";
        // http.get()
        // if(gravatar.url(comments.sessions[i].email) == '404'){
        // 	comments.sessions[i].avatar = "";
        // }else{}
      }

      // add gravatar image links if available
      // for (var i = 0; i < comments.sessions.length; i++) {
      //   comments.sessions[i].avatar = gravatar.url(comments.sessions[i].email, {s: '50', r: 'pg', d: '404'});
      // }

      // convert the json to yaml and save it for jekyll to use.
      var ymlText = yaml.stringify(comments);
      fs.writeFile('./src/_data/comments.yml', ymlText, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Comments data saved.");
        }
      });

    });
  }).on('error', function(e) {
    console.log("Got error: ", e);
  });

});

// // Get comments data from Poole
// gulp.task("comments", function() {
  
//   // set up the request to get comments as YAML
//   var options = {
//     hostname: 'pooleapp.com',
//     port: 80,
//     // path: '/data/{API-SECRET}.yaml',
//     path: '/data/bc363968-9e43-48b0-bde0-77a45175591e.yaml',
//     method: 'GET',
//   };

//   // Go and get data
//   http.get(options, function(res) {
    
//     var body = '';
//     res.on('data', function(chunk) {
//         body += chunk;
//     });
//     res.on('end', function() {
      
//       // Save the comments for jekyll to use as a data source
//       fs.writeFile('./src/_data/comments.yml', body, function(err) {
//         if(err) {
//           console.log(err);
//         } else {
//           console.log("Comments data saved.");
//         }
//       });

//     });
//   });
// });