// hash helper function 
// random index in the hash
const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size
}

class HashTable {
    constructor() {
        // how many containers the hash has 
        this.size = 30
        // the hash back bone 
        this.buckets = Array(this.size)

        // populate each element in the array buckets with a Map()
        for (let i = 0; this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }

    insert(key, value){
        // random index in the hash
        let index = hash(key, this.size)
        // adding key value pair into the map
        this.buckets[index].set(key, value)
    }
   
    remove(key) {
        let index = hash(key, this.size)
        // store bucket map to delete in deleted
        let deleted = this.buckets[index].get(key)
        // delete the map
        this.buckets[index].delete(key)
        // return deleted key
        return deleted 
    }

    search(key) {
        let index = hash(key, this.size)
        // get the map associated with key
        return this.buckets[index].get(key)
    }
    
}

const hashTable = new HashTable()

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')

console.log(hashTable.search('rei'))
console.log(hashTable.search('lita'))
console.log(hashTable.search('serena'))

console.log(hashTable.remove('darien'))
console.log(hashTable.remove('mina'))