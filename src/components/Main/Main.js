import React, {useState, useEffect} from "react";
import "./Main.css";

import EditorSettings from "../EditorSettings/EditorSettings";
import Editor from "../Editor/Editor";


function Main(props) {
    // const [tagName, setTagName] = useState("");
    // const [notes, setNotes] = useState("");
    // const [id, setId] = useState("");

    // function handleChange(e) {
    //     const {value, name} = e.target;
    //     name === "tagName" ? setTagName(value) : setNotes(value);
    // }

    // useEffect(() => {
    //     setTagName(props.editNote.title); 
    //     setNotes(props.editNote.notes);
    //     setId(props.editNote.id);
    // }, [props.editNote.id])

    // function handleSave(e) {
    //     e.preventDefault();
    //     fetch("http://localhost:5000/notes", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify([
    //             { 
    //                 title: tagName,
    //                 note: notes,
    //                 author: "Azizul Bappy" 
    //             }
    //         ])
    //     })
    // }

    // function handleRemove(e) {
    //     e.preventDefault();
    //     fetch(`http://localhost:5000/notes/${id}`, {
    //         method: "DELETE",
    //     });
    // }

    // function addNote() {
    //     setTagName(""); 
    //     setNotes("");
    //     setId("");
    // }

    return (
        <div className="main">
            <EditorSettings id={props.state.id} handleSave={props.handleSave} handleRemove={props.handleRemove} handleUpdate={props.handleUpdate} />
            <Editor tagName={props.state.tagName} notes={props.state.notes} handleChange={props.handleChange} />
        </div>
    )
}

export default Main;