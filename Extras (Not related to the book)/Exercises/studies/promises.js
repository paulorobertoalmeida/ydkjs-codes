//Promises fufilled, reject & 

/*
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))
*/

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Stuff Worked');
    } else {
    reject('Error, it broke');
    }
});



promise.then(result => console.log(result));
// Stuff Worked

promise
    .then(result => {
        return result + '!'
    })
    .then(result2  => {
        throw Error
        console.log(result2);
    })
    .catch(() => console.log('error!'))
    .then(result3 + '!')

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii')
})    

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookiee')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me youre looking for?')
})

Promise.all([ promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})


// Fectching API's using promises
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
] 

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(err => console.log('error'))

//fetch always returns promises



//Parallel

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`
}

// Race

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}


// Sequence
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)


// Promisse .Allsettled

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(resolve, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log("somethings failed", e));