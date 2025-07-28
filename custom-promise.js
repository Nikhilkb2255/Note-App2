const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) resolve("Operation successful!");
  else reject("Operation failed!");
});

promise
.then(data => {
    console.log(data);
})
.catch(err => {
    console.error(err);
});

// .then() runs if the Promise is successful.
// .catch() runs if there is an error.  