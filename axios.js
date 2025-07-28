//GET

const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.error(err);
    });


    
//POST

const axios = require('axios');
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: "Hello",
  body: "This is a post",
  userId: 1
})
.then(res => {
  console.log(res.data);
})
.catch(err => {
  console.error(err);
});
