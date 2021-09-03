// ES8 Async Await function thatreturns a promise



async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json();
    console.log(data)
}

Promise.all(urls.map(url => 
    fetch('https://jsonplaceholder.typicode.com').then((response => response.json())))).then(array =>{
        console.log('users', array[0])
    }).catch('oops');

    const getData = async function() {
        try {
            const [ users, posts, albums] = await Promise.all(urls.map(url => fetch('https://jsonplaceholder.ty').then(response => response.json())
            ))
            console.log('users', users)
        } catch (err) {
            console.log('oops', err);
        }
    }