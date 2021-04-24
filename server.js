const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

//require all notes from db.json
const allNotes = require('./db/db.json');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//app.get
app.get('/api/notes', (req, res) =>{
    res.json(allNotes);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//functions

    //create new note

    function createNewNote(body, notesArray){
        const newNote = body;
        if (!Array.isArray(notesArray))
        notesArray = [];

        if(notesArray.length === 0)
        notesArray.push(0);
    }









app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });