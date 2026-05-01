class HashMap{
    load_factor = 0.75;
    capacity = 16;
    bucket = new Array(this.capacity);
    set(key, value){
        const hashedKey = hash(key)
        if(this.bucket[hashedKey] === undefined){
            const list = new LinkedList();
            list.prepend(value)
            this.bucket[hashedKey] = list;
            return;
        }
        if(this.bucket[hashedKey] !== undefined){
            const list = this.bucket[hashedKey]
            list.append(value);
        }
    }
    get(key){
        if(this.bucket[key]){
            return this.bucket[key];
        }else{
            return null;
        }
    }
    has(key){
        if(this.bucket[key]){
            return true;
        }else{
            return false;
        }
    }
    remove(key){
        if(this.bucket[key]){
            this.bucket[key] = undefined;
            return true;
        }else{
            return false;
        }
    }
    length(){
        let count = 0;
        this.bucket.forEach(item => {
            if(item !== undefined){
                count++
            }
        })
        return count;
    }
    clear(){
        for(let i = 0; i <= this.bucket.length - 1; i++){
            if(this.bucket[i] !== undefined){
                console.log(i);
                this.bucket[i] = undefined;
            } 
        }
        console.log(this.bucket);
        return true;
    }
    keys(){
        const arr = [];
        for(let i = 0; i <= this.bucket.length - 1; i++){
            if(this.bucket[i] !== undefined){
                arr.push(i);
            }
        }
        return arr;
    }
    values(){
        const arr = [];
        for(let i = 0; i <= this.bucket.length - 1; i++){
            if(this.bucket[i] !== undefined){
                arr.push(this.bucket[i]);
            }
        }
        return arr;
    }
    entries(){
        const arr = [];
        for(let i = 0; i <= this.bucket.length - 1; i++){
            if(this.bucket[i] !== undefined){
                const entries = [];
                entries.push(i);
                entries.push(this.bucket[i]);
                arr.push(entries)
            }
        }
        return arr;
    }
}   
class LinkedList {
    head = null;
    tail = null;
    append(value){
        const newNode = new Node()
        newNode.value = value
        newNode.nextNode = null;
        let current = this.head;
        console.log(current);
        if(this.head === null){
            this.tail = this.head;
        }
        while(current){
            if(current.nextNode === null){
                current.nextNode = newNode;
                break;
            }
            current = current.nextNode;
        }
        this.tail = newNode;
        
    }   
    prepend(value){
        const newNode = new Node();
        newNode.value = value;
        newNode.nextNode = this.head;
        this.head = newNode;
        if(this.tail === null){
            this.tail = this.head;
        }
        return this.head;
    }

}

class Node {
    value = null;
    nextNode = null;
}

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
  }
  console.log(hashCode);
  return hashCode;
} 

const test = new HashMap();

test.set('apple', 'red')
test.set('apple', 'dog')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('jacket', 'cat')
test.set('kite', 'pink')
test.set('kite', 'pig')
test.set('lion', 'golden')
test.set('moon', 'silver')
console.log(test.bucket);
console.log('----');
console.log(test.get(4));
console.log(test.has(2));
console.log(test.remove(2));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.clear());
console.log(test.bucket);
