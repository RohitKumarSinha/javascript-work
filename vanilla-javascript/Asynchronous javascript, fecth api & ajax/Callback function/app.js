const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post Two'}
];

// first goes to createPost it delays 2 second so it go to getPosts and not executed createPost
// this is synochronus function
// function createPost(post) {
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: "This is post three"});

// getPosts();


// first goes to createPost it delays 2 second so it go to getPosts and then finally goes to createPost after 2 second and print the post
// this is asynochronus function
function createPost(post, callback) {
  setTimeout(function(){
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: "This is post three"}, getPosts);
