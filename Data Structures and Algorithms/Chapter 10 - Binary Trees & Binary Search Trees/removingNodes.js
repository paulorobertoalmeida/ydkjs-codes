
function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        if (node.left == null && node.right == null) {
            return null;
        }
        if (node.left == null) {
            return node.right;
        }
        if (node.right == null) {
            return node.left;
        }
        let tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node; 
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

// Counting Occurrences.

fucntion Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function update(data) {
    let grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    prompt(arr[0].toString() + ' ');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr.[i].toString() + ' ');
        if (i % 10 == 0) {
            console.log("\n");
        }
    }
}

function genArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

function prArray(arr) {
    console.log(arr[0].toString() + ' ');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString() + ' ');
        if (i % 10 === 0) {
            console.log("\n")
        }
    }
}

function genArray(lenght) {
    let arr = [];
    for (let i = 0; i < lenght; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
