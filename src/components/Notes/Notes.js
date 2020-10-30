import React, {useState, useEffect} from "react";
import "./Notes.css";

function Notes(props) {
    const [notes, setNotes] = useState([]);;
    const [isLoading, setLoading] = useState(true);
    let called = props.called;

    useEffect(() => {
        console.log(true)
        fetch("http://localhost:5000/").then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Request failed!")
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            
            let notes = [];
            jsonResponse.map(note => {
                notes.push({
                    id: note._id,
                    title: note.title,
                    notes: note.notes
                })
            });
            setLoading(false);
            setNotes(notes)
        })
    }, [props.called]);
 
    return (
        <div className="note-list">
            <div className="tags">
                <p> Tags </p>
                <i className="fas fa-caret-down"></i>
            </div>

            { <div className="all-notes">
                {   isLoading ?
                    <div> Loading... </div>
                    :
                    notes.map(note => {
                        return(
                            <div key={note.id} className="note" value="asd" onClick={props.handleClick(note)} >
                                <h4> {note.title} </h4>
                                <p> {note.notes} </p>
                            </div>
                        )
                    })
                }
            </div> }

        </div>
    )
}

export default Notes;