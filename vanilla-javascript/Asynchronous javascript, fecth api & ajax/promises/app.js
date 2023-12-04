const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post Two'}
];


function createPost(post, callback) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000);
  });
  
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

createPost({title: 'Post Three', body: "This is post three"})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});
