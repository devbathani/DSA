class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current.next) {
            count++;
            current = current.next;
        }
        return count;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;       // Looping the list to the end of it to add the vlaue
        }
        current.next = newNode;
    }

    addAtIndex(index, data) {
        const newNode = new Node(data);
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index");    //Checking if the given index is valide or not
            return
        }
        if (index === 0) {
            newNode.next = this.head;      //Add the Node if the given index is at 0
            this.head = newNode;
            return
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;

    }

    removeFromTop() {
        if (!this.head) {
            return
        }
        this.head = this.head.next;
    }
    removeFromLast() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;       // Looping the list to the end of it to add the vlaue
        }
        current.next = null;
    }

    removeAtIndex(index) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index");    //Checking if the given index is valide or not
            return
        }
        if (index === 0) {
            this.head = this.head.next;
            return
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }

    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.addFirst(5);
linkedList.addFirst(6);
linkedList.addFirst(8);
linkedList.addLast(9);

linkedList.print();