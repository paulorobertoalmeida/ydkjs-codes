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