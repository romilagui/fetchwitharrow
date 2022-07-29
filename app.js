// Event Listeners
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Callback functions 
function getText(){
  fetch('text.txt')
  .then(res => res.text())
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data; 
   // Data is supposed to appear on the page 
  })
    .catch(err => console.log(err));
}

// Get JSON 
function getJson(){
  fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    console.log(data); 
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}
// Third 
function getExternal(){
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    console.log(data); 
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err))
  }

