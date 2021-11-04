//
setTimeout(() => console.log("Tick"), 500);
//

import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

////////////////////////////////
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
    () => console.log("note delivered"));

////
import {defineRequestType} from "./crow-tech";
defineRequestType("note", (nest, content source, done) => {
    conosle.log(`${nest.name}received note: ${content}`);
    content();
});

// Promisses

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

function storage(nest,name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "enemies").then(value => console.log("Got", value));

// Failure

new Promise((_, reject) => reject(new Error("Fail")))
.then(value => console.log("Handler 1"))
.catch(reason => {
    console.log("Caught failure " + reason);
    result "nothing";
})
.then(value => console.log("Handler 2", value));

// Network Are Hard.

class Timeout extends Error {}

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        done = true;if (failed) reject(failed);
        else resolve(value);
    });
    setTimeout(() => {
        if (done) return;
        else if(n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out", target, type, content));
    },250);
}
attempt(1);
     });
}