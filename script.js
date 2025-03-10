class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.head){
            newNode.nextNode = this.head;
        } else {
            this.tail = newNode
        }
        this.head = newNode;
        this.size++;
    }

    at(index){
        if (index < 0 || index >= this.size)return null;

        let curr = this.head;
        let count = 0;
        while(count < index){
            curr = curr.nextNode;
            count++;
        }
        return curr;
    }

    pop(){
        let curr = this.head
        let itt = 0;
        while(this.size - 2 > itt){
            curr = curr.nextNode;
            itt++;
        }
        this.tail = curr;
        curr.nextNode = null;
        this.size--;
    }

    contains(value){
        let curr = this.head
        while(curr !== null && curr.value !== value){
            curr = curr.nextNode;
        } if (curr !== null){
            console.log(`list contains:  ${value}`)
        } else {
            console.log(`list does not contain: ${value}`)
        }
    }

    find(value){
        let curr = this.head
        let index = 0;
        while(curr !== null && curr.value !== value){
            curr = curr.nextNode;
            index++;
        } if (curr !== null){
            console.log(`list contains ${value} at index  ${index}`)
        } else {
            console.log(`list does not contain: ${value}`)
        }
    }

}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("hamster");
list.prepend("parrot");
list.append("snake");
list.append("turtle");
list.find("snake")
