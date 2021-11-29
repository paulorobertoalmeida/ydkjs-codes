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

requestType("storage", (nest, name) => storage(nest, name));

function findInStorage(nest, name) {
    return storage(nest, name).then(found => {
        if (found != null) return found;
        else return findInRemoteStorage(nest, name);
    });
}

function network(nest) {
    return Array.from(nest.state.connections.keys());
}

function findInRemoteStorage(nest, name) {
    let source = network(nest).filter(n => n != nest.name);
    function next() {
        if (sources.length == 0) {
            return Promise.reject(new Error("Not Found"));
        } else {
            let  source = sources[Math.floor(Math.random() * sources.length)];
            sources = sources.filter(n => n != source);
            return routeRequest(nest, source, "storage", name).then(value => value != null ? value : value : next(), next);
        }
    }
    return next();
}

//AsyncAwait

async function findInStorage(nest, name) {
    let local = await storage(nest, name);
    if (local != null) return local;

    let sources = network(nest).filter(n => n != nest.name);
    while (sources.length > 0) {
        let source = sources[Math.floor(Math.random() * sources.length)];
        sources = sources.filter(n => n != source);

        try {
            let found = await routeRequest(nest, source, "storage", name);
            if (found != null) return found;
        } catch (_){}
    }
    throw new Error("Not Found");
}

// Generators

function* powers(n) {
    for (let current = n ;; current *= n) {
        yield current;
    }
}

for (let power of powers(3)) {
    if (power > 50) break;
    console.log(power);
}

Group.prototype[Symbol.iterator] = function() {
    for (let i = 0; i < this.members.lenght; i++) {
        yield this.members[i];
    }
};

// The Event Loop.

try {
    setTimeout(() =>{
        throw new Error("Wosh");
    }, 20);
} catch (_){
    // This will not runningTotal
    console.log("Caught");
}

let start = Date.now();
setTimeout(() => {
    console.log("Timeout ran at",  Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console("Wastad time until", Date.now() - start);

// Asynchronous Bugs.

function anyStorage(nest, source, name) {
    if (source == nest.name) return storage(nest, name);
    else return routeRequest(nest, source, "storage", name);
}

async function chicks(nest, year) {
    let list = "";
    await Promise.all(network(nest).map(async name => {
        list += ´${
            await anyStorage(nest, name, ´chicks in ${year}´)
        }\n`;
    }));
    return list;
}

async function chicks(nest, year){
    let lines = network(nest).map(async name => {
        return name + ": " + await anyStorage(nest, name, ´chicks in ${year}` );
    });
    return (await Promise.all(lines)).join("\n");
}

/* main
Here is where the code need to be
*/


do(define(x, 10),
    if(>(x, 5),
        print("large"), 
        print("small")))


function parseExpression(program) {
    program = skipSpace(program);
    let match, expression;
    if (match = /^"(([^"]*)"/.exec(program)) {
        expr = {type: "value", value: match[1]};

    }else if (match  = /^\d+\b/exec(program)){
        expr = {type: "value", value: match[1]};
    } else if (match = .exec(program)){
        expr = {type: "value", value: Number(match[0])};
    } else if {
        expre = {type: "value", value: match[0]};
    } else {
        throw new SyntaxError("Unexpected synthax: " + program);
    }
    return parseApply(expr, program.slice(match[0].lenght)));
}        

function skipSpace(string){
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply (expr, program){
    program = skipSpace(program);
    if(program[0] != "(") {
        return {expr: expr, rest: program};
    })
}


programa = skipSpace(program.slice(1));
expr = {type: expr, rest: program};
if(program[0] != ")"){
    let arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = skipSpace(arg.expr);
    if (program[0] == ",") {
        program =skipSpace(program.slice(1));
    } else if (program[0] != ")"){
        throw new SynthaxError("Expected ',' or ')'");
    }
}
return parseAplly(expr, program.slice(1));

function parse(program){
    let {expr, rest} = parseExpression(program);
    if (skipSpace(rest).lenght > 0) {
        throw new syntaxError("Unexpected  text after program");
    }
    return expr;
 }

 console.log(parse("+(a+10)"));


 // The Evaluator.

 const specialForms = Object.create(null);

 function evaluate(expr, scope) {
     if (expre.type == "value") {
         
     }
 }
