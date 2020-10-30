import React from 'react';
import './App.css';

import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";


class App extends React.Component {

    constructor() {
      super();
      this.state = {
        editNote: {},
        tagName: "",
        notes: "",
        id: "",
        called: false
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.addNote = this.addNote.bind(this);
    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState({
          [name]: value
        })
    }

    componentDidUpdate() {
      console.log("Update");
        if(this.state.called) {
            this.setState({
                called: false
            })
        }  
    }

    // shouldComponentUpdate(prevProps, prevState) {
    //   if(prevState.id !== this.state.id) {
    //     console.log(prevState, "prev");
    //     console.log(this.state, "current");
    //     return true; 
    //   } else {
    //     console.log("false")
    //     return false;
    //   }
    // }

    handleSave() {
      this.setState({
        called: true
      })
      fetch("http://localhost:5000/notes", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify([
              { 
                  title: this.state.tagName,
                  note: this.state.notes,
                  author: "Azizul Bappy" 
              }
          ])
      }).then(response => {
          if(response.ok) {
              return response.json();
          }
          throw new Error("Request failed!")
      }, networkError => console.log(networkError.message)
      ).then(jsonResponse => {
          jsonResponse.map(id => {
            this.setState({
              id: id._id,
              notes: id.notes
            })
          })
      })
    }

    handleRemove() {
      fetch(`http://localhost:5000/notes/${this.state.id}`, {
          method: "DELETE",
      });

      this.setState({
        editNote: {},
        tagName: "",
        notes: "",
        id: "",
        called: true
      })
    }

    handleUpdate() {
      this.setState({
        called: true
      })
      fetch("http://localhost:5000/notes/" + this.state.id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          { 
              title: this.state.tagName,
              notes: this.state.notes,
              author: "Azizul Bappy" 
          }
      )
      })
    }

    addNote() {
      console.log("add")
        this.setState({
            editNote: {},
            tagName: "",
            notes: "",
            id: "" 
        })
    }

    handleClick(note) {
      return (e) => {
          e.preventDefault();
          this.setState({
              editNote: note,
              tagName:  note.title,
              notes: note.notes,
              id: note.id
          })
      }
    }
    
    render() {
      console.log("render");
        return (

            <div className="app">
                <SideBar handleClick={this.handleClick} addNote={this.addNote} called={this.state.called} />
                <Main state={this.state} handleSave={this.handleSave} handleRemove={this.handleRemove} handleChange={this.handleChange} handleUpdate={this.handleUpdate} />
            </div>

        )
    }
}

export default App;
