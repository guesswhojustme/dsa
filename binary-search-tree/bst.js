class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.root = buildTree(arr);
    }
}

function buildTree(arr) {
    if (arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const node = new Node(arr[mid]);

    node.left = buildTree(arr.slice(0, mid));
    node.right = buildTree(arr.slice(mid + 1));

    return node;
}

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}
const arr = [2,4,6,8,10,12,14];
const tree = new Tree(arr);
console.log(tree.root);

const root = buildTree(arr);
function includes(value){
    let current = tree.root;
    while(current){ 
        if(value === current.value){
            return true;
        }
        if(value > current.value){
            current = current.right;
        } else if (value < current.value){
            current = current.left;
        }
    }
    return false;
}

function insert(value){
			 let current = tree.root;
             const node = new Node(value);
			 while(current){
				 if(value === current.value){
					 break;
					 return;
				 }				
				 if(value < current.value){
					 if(current.left === null){
						 current.left = node
						 break;
						 return;
					 }
					 current = current.left;
				 }else if (value > current.value){
					 if(current.right === null){
						 current.right = node
						 break;
						 return;
					 }
					 current = current.right;
				 }
			 }
		 }

function deleteItem(value){
    let current = tree.root;
		 while(current){
			 if(value === current.value){
                 current.value = null;
                 current.left = null;
                 current.right = null;
                 break;
                 return;
			 } else if(value > current.value){
				 current = current.right
			 } else if (value < current.value){
				 current = current.left
			 }
		 }
		 return;
}

function levelOfOrderForEach(callback){
    const queue = [];
	let current = tree.root;
	queue.push(current)
	while(queue){
		if(queue[0]){
            callback(queue[0].value);
        }else{
            break;
            return;
        }
		if(queue[0].left !== null){
	    	queue.push(queue[0].left)
		}
		if(queue[0].right !== null){
			queue.push(queue[0].right)
		}
		queue.shift();
	}
}

function preOrderForEach(callback, current = tree.root){
    if(current === null){
		return;
	}
    callback(current.value);
	preOrderForEach(callback, current.left);
	preOrderForEach(callback, current.right);
}

function inOrderForEach(callback, current = tree.root){
	if(current === null){
	    return; 
	}
    inOrderForEach(callback, current.left);
	callback(current.value);
	inOrderForEach(callback, current.right)
}

function postOrderForEach(callback, current = tree.root){
	if(current === null){
	    return; 
	}
    postOrderForEach(callback, current.left);
	postOrderForEach(callback, current.right);
    callback(current.value);
}

function height(value) {
    const node = findNode(tree.root, value);
    if (!node) return undefined;

    return getHeight(node);
}

function findNode(current, value) {
    while (current) {
        if (value === current.value) return current;
        if (value < current.value) current = current.left;
        else current = current.right;
    }
    return null;
}

function getHeight(node) {
    if (node === null) return -1; // important for edge counting

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) {
    return checkHeight(root) !== -1;
}

function checkHeight(node) {
    if (node === null) return -1;

    const leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}

function depth(value){
		  let current = tree.root;
		  let count = 0;
		  while(current){
			  if(value === current.value){
				  return count;
			  }
			  if(value < current.value){
				  current = current.left;
				  count++
			  } else {
				  current = current.right;
				  count++
			  }
		  }
		  return undefined;
}

function printNodeVal(node){
    console.log(node);
}

// console.log(includes(12));
// insert(5);
console.log(tree.root);
prettyPrint(tree.root);
levelOfOrderForEach(printNodeVal);
console.log('-------');
prettyPrint(tree.root);
preOrderForEach(printNodeVal);
console.log('-------');
prettyPrint(tree.root);
inOrderForEach(printNodeVal);
console.log('-------');
prettyPrint(tree.root);
postOrderForEach(printNodeVal);
console.log('-------');
console.log(height(4));
console.log('-------');
console.log(depth(5));
console.log('-------');
console.log(isBalanced(tree.root));
