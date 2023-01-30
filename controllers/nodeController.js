const generator = require('../util/generator')
const memStorage = require('../util/memory.storage')
const model= require('../model/note.model');

const localStorage = require("localstorage-memory");


exports.getAllnotes=(req,res)=>{
    const seqId= generator.generate()
    localStorage.setItem(seqId,'1s_key');
    const seqId_2= generator.generate()
    localStorage.setItem(seqId_2,'2s_key');

    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
    }

    const values = [];
    for (let i = 0; i < localStorage.length; i++) {
        values.push(localStorage.getItem(localStorage.key(i)));
    }

    console.log("Values......"+JSON.stringify(values))
    const Note = model.Note;
    const noteObj = new Note(seqId, 'ccc','sss','ddd',new Date())
    res.send("get all notes ... KEYS......."+ JSON.stringify(noteObj));
}

exports.saveNote=(req,res)=>{
    res.send("save note .....");

}
exports.updateNote=(req,res)=>{
    res.send("update note .....");
}

exports.deleteNote=(req,res)=>{
    res.send(" delete note .....");
    
}