// ES8 Async Await function thatreturns a promise



async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json();
    console.log(data)
}

fetchUsers()