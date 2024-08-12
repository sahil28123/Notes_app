const Notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Change version
yargs.version('1.1.0')

//Create Add command
yargs.command({
    command: "add",
    describe: "Adding New Note!",
    builder: {
        title: {
            describe: "Title of Note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Description of Note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
}).argv

//Create Remove command
yargs.command({
    command:"remove",
    describe:"Remove Note",
    builder:{
        title: {
            describe: "Title of Note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
}).argv

//Create List command
yargs.command({
    command:"list",
    describe:"List Note",
    handler(argv){
        notes.listNotes()
    }
}).argv

//Create read command
yargs.command({
    command:"read",
    describe:"Read Note",
    builder:{
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
        
    }
}).argv








