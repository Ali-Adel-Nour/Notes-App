const MemoryStorage = require('memorystorage');

const myStorage = new MemoryStorage('node-app');


exports.getKeys= (store) =>{
    let keys = [];
    for(let i=0; i<store.length; i++){
        let key = store.key(i);
        keys.push(key);
    }
return keys;
}


exports.getValues= (store) =>{
    let values = [];
    for(let i=0; i<store.length; i++){
        let key = store.key(i);
        let value = store.getItem(key);
        values.push(value);
    }
return values;
}





exports.myStorage = myStorage;