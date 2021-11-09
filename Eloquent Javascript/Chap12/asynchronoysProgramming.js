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

function requestType(name, handler) {
    defineRequestType(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
            .then(request => callback(null, response),
            failure => callback(failure));
        } catch(exception) {
            callback(exception);
        }
    });
}

// Collection of Promises.

requestType("ping", () => "pong");

function availableNeighbours.map(neightbour) => {
    let requests = nest.neightbor, "ping")
    .then(() => true, () => false);
});
return Promise.all(requests).then(result => {
    return nest.neightbor.filter((_,i) => result[i]);
});
}

// Network Flooding.

import {everything} from "./crow-tech";

everywhere(nest => {
    nest.state.gossip = [];
});

function sendGossip(nest, message, excepFor = null) {
    nest.state.gossip.push(message);
    for (let neighbor of nest.neighbors) {
        if (let neighbour of nest.neighbors) {
            if (neightbor == excepFor) continue;
            request(nest, neighbor, "gossip", message);
        }
    }
    requestType("gossip", (nest, message, source) => {
        if (nest.state.gossip.includes(message)) return;
        console.log(`${nest.name} received gossip '${message}' from ${source}`);
        sendGossip(nest, message, source);
    });
}

// Message Routing.

requestType("connection", (nest, {name,neighbor}, source) => {
    let connection = nest.state.connections;
if (JSON.stringify(connection.get(name)) ===
        JSON.stringify(neighbors)) return;
    connections.set(name, neighbors);
broadcastConnections(nest, name, source)
});

function broadcastConnections(nest, exceptFor = null) {
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue;
        request(nest, neighbor, "connections", {
            name,
            neighbors: nest.state.connections.get(name)
        });
    }
}

everywhere(nest => {
    nest.state.connections = new Map();
    nest.state.connections.set(nest.name, nest.neighbors);
    broadcastConnections(nest, nest.name); 
});

////////////

function findRoute(from, to, connections) {
    let work = [{at: from, via: null}];
    for (let i = 0; i < work.length; i++) {
        let {at, via} = work[i];
        for ( let next of connections.get(at) || [] ) {
            if (next == to) return via;
            if (!work.some(w => w.at == next)) {
                work.push({at: next, via: via || next});
            }
        }
    }
    return null;
}

function routeRequest(nest, target, type, content) {
    if (nest. neighbors.includes(target)) {
        return request(nest, target, type, content);
    } else {
        let via = findRoute(nest.name, target, nest.state.connections);
        if (!via) throw new Error(`No route to ${target}`);
        return request(nest, via, "route", {target, type, content});
    }
}

requestType("route", (nest, {target, type, content}) => {
    return routeRequest(nest, target, type, content);
});

// Async Functions.

requestType("storage",)