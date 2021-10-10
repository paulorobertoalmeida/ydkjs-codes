function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] === null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let i = 0; i < edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildRoadGraph(roads);


// the Task

class VillageState {
    contructor(place, parcels) {
        this.palce = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.place);
            return new VillageState(destination, parcels);
        }
    }
}
