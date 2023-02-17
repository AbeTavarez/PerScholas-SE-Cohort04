
// Node Basic Class
export class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

// LinkedList Class
export class LinkedList {

   constructor() {
    this.head = null;
   }

   getHeadNode() {
    return this.head;
   }

   clear() {
    this.head = null;
   }

   traverse() {
    let walker = this.head; // first Node in the list

    while(walker) {
        console.log(walker.data);
        walker = walker.next; // moving to the next Node
    }
   }

   getLast() {
   }

   appendNodeEnd() {
   }
   
}

export class TextNode {
    constructor(data) {
        this.data = data;
        this.length = data.length;
    }
}

export class ElementNode {
    constructor(name) {
        this.elementName = name;
        this.textContent = null;
        this.outerHTML = null;
    }

    setTextContent(text) {
        this.textContent = text;
        this.outerHTML = this.#setOuterHtml();
    }

    #setOuterHtml() {
        return  `<${this.elementName}>${this.textContent}</${this.elementName}>`;
    }
}