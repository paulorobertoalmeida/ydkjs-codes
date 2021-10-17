class Timeout extends Error {
    function request(nest, target, type, content) {
        return new Promise((resolve, reject) => {
            let done = false;
            function attempt(n) {
                nest.send(target, type, content, (failed, value) => {
                    done = true;
                    if (failed) reject(failed);
                    else resolve(value);
                });
                setTimeout(() => {
                    if (done) return;
                    else if (n < 3) attempt(n + 1);
                    else reject(new Timeout("Timed out"));
                }, 250);
            }
            attempt(1);
        });
    }
}


function requestType(name, handler) {
    defineRequest(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
            .then(response => callback(null, response),
                failure => callback(failure));
        } catch (exception) {
            callback(exception);
        }
    });
}

// collection of promises

requestType("ping", () => "pong");

function availableNeighbors(nester) {
    let requests = nest.neighbors.map(neighbors => {
        return requests(nest, neighbor, "ping")
        .then(() => true, () => false);
    });
        return Promise.all(requests).then(results => {
            return nest.neighbor.filter((_, i) => result[i]);
        });
    }