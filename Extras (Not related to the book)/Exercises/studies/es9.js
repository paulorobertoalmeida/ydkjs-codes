// object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const array = [1,2,3,4,5];
function sum (a,b,c,d,e) {
    return a + b + c + d + e;
}


const {tiget, ...rest} = animals;

sum(...array);


function objectSpread (p1, p2, p3) {
    console.log(p1)
}

const {tiger, lion, ...rest} = animals; 

objectSpread(tiger, lion, rest);


// for await of


const getData = async function(){
    const arrayOfPromises = urls.map(url => fetch(url)).toArray();for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data)
    }
}










const loop = url => {
    for (url of urls) {
        console.log(urls);
    }
}