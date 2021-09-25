// Building Binary Search Tree Implementation.

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

// The BST and Node classes.

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BTS() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) { 
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// Here is the ocde for the inorde traversal functions:

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

// Inorder traversal of a BST 

let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);

//Preorder traversal function

function preOrder(node) {
    if(!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

// Implementation of a postOrder() function.

function postOrder(node) {
    if(!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}


// SEARCHING FOR THE MINIMUM AND MAXIMUM VALUE.

function getMin() {
    let current = this.root;
    while(!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    let current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
let min = nums.getMin();
console.log(" The minimum value of the BST is: " + min);
console.log("\n")
let max = nums.getMax();
console.log(" The maximum value of the BST is: " + max);

// SEARCHING GOR A SPECIFIC value

function find(data) {
    let current = this.root;
    while (current.data != data) {
        if (cdata < current.data) {
            current = current.left;
        }
        else{
            current = current.right;
        }
        if (current = null) {
            return null;
        }
    }
    return current;
}
