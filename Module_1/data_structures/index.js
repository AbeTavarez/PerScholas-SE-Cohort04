import { Node, LinkedList, TextNode, ElementNode } from './data_structures.js';


const node1 = new Node(4);
const node2 = new Node(7);
const node3 = new Node(12);

console.log(node1)
console.log(node2)
console.log(node3)

const myLinkedList = new LinkedList();


// head: 4 -> 7 -> 12 -> null

myLinkedList.head = node1;
myLinkedList.head.next = node2;
myLinkedList.head.next.next = node3;

console.log(myLinkedList)

// gets head Node
console.log(myLinkedList.getHeadNode());

//* traversing
myLinkedList.traverse();

// walker: 4 -> 7 -> 12 -> null
let walker = myLinkedList.getHeadNode();

//* Removing Node with value of 7
// walker.next = walker.next.next;

//* Swapping Nodes 

// walker    -> next   -> next -> null
// 4         -> 7      -> 12   -> null

let temp = walker.next.next; // Node with 12

walker.next.next = temp.next; // 7 -> null

temp.next = walker.next // 12 -> 7

walker.next = temp;  // 4 -> 12

// walker: 4 -> 12 -> 7 -> null
console.log(walker);

// * Text Node
const textNode = new TextNode("hello world");
console.log(textNode);

//* Element Node
const div = new ElementNode("div");
div.setTextContent("Hello Element Node");

console.log(div);

//* Test
const p = document.createElement("p");
p.textContent = "Hello world"

console.dir(p);