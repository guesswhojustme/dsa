class LinkedList {
    head = null;
    tail = null;
    nodeCount = 0;
    append(value){
        const newNode = new Node()
        newNode.value = value
        newNode.nextNode = null;
        if(this.tail){
            this.tail.nextNode = newNode;
        }
        console.log(this.tail);
        this.tail = newNode;
        if(this.head === null){
            this.head = this.tail;
        }
        console.log(this.head);
        console.log(this.tail);
    }   
    prepend(value){
        const newNode = new Node()
        newNode.value = value
        newNode.nextNode = this.head;
        this.head = newNode;
        if(this.tail === null){
            this.tail = this.head;
        }
        console.log(this.head);
        console.log(this.tail);
    }
    size(){
        let current = this.head;
        let count = 0;
        while(current){
            count++
            current = current.nextNode;
        }
        console.log(count);
    }
    headNode(){
        if(this.head === null){
            return undefined;
        }
        console.log(this.head);
        return this.head
    }
    tailNode(){
        if(this.tail === null){
            return undefined;
        }
        console.log(this.tail);
        return this.tail
    }
    at(index){
        const str = "this.-head"
        const strArr = str.split('-')
        for(let i = 0; i < index - 1; i++){
            strArr.push(".nextNode");
        }
        const convertBack = strArr.join('');
        console.log(eval(convertBack));
        if(eval(convertBack) === null){
            console.log(undefined);
            return undefined;
        }
        return eval(convertBack);
        }
    pop(){
        let current = this.head;    
        current = current.nextNode
        this.head = current;
        console.log(current);
        return current;
    }
    contains(value){
        let current = this.head;
        while(current){
            if(value === current.value){
                console.log("true");
                return true;
            }
            current = current.nextNode;
            console.log(current);
        }
        return false;
    }
    findIndex(value){
        let current = this.head;
        let count = 0;
        while(current){
            count++
            if(value === current.value){
                console.log(count);
                return count;
            }
            current = current.nextNode;
            console.log(current);
        }
        console.log("-1");
        return -1;
    }
    toString(){
        const arr = [];
        let current = this.head;
        while(current){
            current = current.nextNode;
            if(current === null){
                arr.push('null')
                break;
            }
            arr.push(`( ${current.value} ) -> `);
            console.log(current);
        }
        const covert = arr.join('');
        console.log(covert);
    }
}

class Node {
    value = null;
    nextNode = null;
}

const list = new LinkedList();
list.append("dog");
list.prepend("cat");
list.prepend("lion")
list.append("tiger")
list.append("bear")
list.prepend("horse")
list.headNode();
list.tailNode();
list.at(4);
list.prepend("ling");
list.append("ck")
list.contains("bear");
list.size();
list.findIndex("tiger");
list.toString();