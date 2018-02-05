const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3200);
});

promise
    .then(() => console.log('finished'))
    .then(() => console.log('also ran'))
    .catch(() => console.log('rejected!'));

//////////////////////////////////////
// Ajax requests with Fetch

const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
