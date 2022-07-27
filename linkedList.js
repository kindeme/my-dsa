
// LinkedList doest have index, it  all over the place
//head point to the first item
//tail point to the last item
// last item point to null

// LinkedList push() is => O(1) 
// LinkedList pop() is => O(n) because you have to iterate through all the nodes
// LinkedList unshift() and  shift() are => O(1) 
// LinkedList insert in the midlle is => O(n) 
// LinkedList remove from the midlle is => O(n) 
// LinkedList find by index or value => O(n) 


//create a new node
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
    
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head 
        this.length = 1
    }


// push  in LinkedList
   // step 1 : create a new node

    push(value) {
        const newNode = new Node(value)
        // if pointed to null
        //point to a new node
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
            
        }
        this.length++
        return this
    }

    // pop in LinkedList
    
    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--
       
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
        
    }

    //Unshift 
    unshift(value){
        const newNode = new Node(value)
 
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
            
        }
        this.length++
        return this
    
    }

    // shift

    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0){
          this.tail = null  
        }
        temp.next = null
        return temp
    }

    // Get

    get(index){
        if(index < 0 || index >= this.length){
            return  undefined
        }
        let temp = this.head
        for(let i = 0; i< index; i++){
             temp = temp.next
         }
    
      return temp
      }

    //set

    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
         }
        return false;
    }

    // Insert

    insert(index, value){
        
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        if(index < 0 || index > this.length) return false
        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    
    
    }

    // remove

    remove(index){
            if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if(index < 0 || index >= this.length) return undefined

        const before = this.get(index -1)
        const temp = before.next
        
        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    
    
    }
    
    // reverse
    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next 
        let prev = null

        for(let i = 0; i < this.length; i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
        
    }
}


// create new LinkedList
let myLinkedList = new LinkedList(7)
myLinkedList.push(4)