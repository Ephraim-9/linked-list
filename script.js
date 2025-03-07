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
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
}











const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("hamster");
list.append("snake");
list.append("turtle");







console.log(list); 
console.log(list.head.value);  
console.log(list.tail.value);  
console.log(list.size); 