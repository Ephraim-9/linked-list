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
}











const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("hamster");
list.prepend("parrot");
list.append("snake");
list.append("turtle");






list.pop()
console.log(list.at(5)?.value)
console.log(list)






