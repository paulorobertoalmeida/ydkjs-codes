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