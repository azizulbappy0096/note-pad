const express = require('express')
const app = express();
var cors = require('cors');
const port = 5000;

// const axios = require('axios');
const Note = require("./model/NoteData");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Azizul_Bappy:TVlZERlsS13t23Gm@azizuls-cluster.frqz6.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// app.use(express.static('public'))
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  Note.find({}, (err, success) => {
    if(err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(success)
    }
  })
  
})

app.post("/notes", (req, res) => {
    let dbNotes = [];
    const notes = req.body;
    notes.map(note => {
        dbNotes.push({
          title:  note.title,
          author: note.author,
          notes:  note.note,
        })
    })

    Note.create(dbNotes, (err, success) => {
      if(err) {
        res.status(401).send(err)
      } else {
        res.status(200).send(success)
      }
    })
})

app.put("/notes/:id", (req, res) => {
    const id = req.params.id;
    Note.updateOne({_id: id}, req.body, (err, success) => {
        if(err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(success)
        }
    })    
})

app.delete("/notes/:id", (req, res) => {
    const id = req.params.id;

    Note.deleteOne({_id: id}, (err, success) => {
        if(err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(success)
        }
    })
})

app.delete("/", (req, res) => {
    Note.deleteMany({}, (err, success) => {
      if(err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(success)
      }
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})