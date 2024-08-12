const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=>{
     return 'Your notes...'
}

const addNote = (title, body)=>{
    const notes = loadNotes()

    const duplicateNotes = notes.find((note)=> note.title === title)
   

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New node added!"))

    }else{
        console.log(chalk.green.inverse("Note title taken!"))
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const notestoKeep = notes.filter((note)=> note.title !== title)

    if(notes.length > notestoKeep.length){
        console.log(chalk.green.inverse("Note Removed!"))
        saveNotes(notestoKeep);
    }else{
        console.log(chalk.red.inverse("No Note found!"))
    }
    }

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.green.inverse("Your Notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title)=>{
    const notes = loadNotes();
    const noteToRead = notes.find((note)=> note.title === title)
    if(noteToRead){
        console.log(chalk.green.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }else{
        console.log(chalk.red.inverse("No Note Found"))
    }

}


const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}

const loadNotes = ()=>{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
    }catch(e){
        return []
    }

}




module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes,
   readNote: readNote
}

