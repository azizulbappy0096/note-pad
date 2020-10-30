import React from "react";
import "./Editor.css";

function Editor(props) {
    // const [tagName, setTagName] = useState("");
    // const [notes, setNotes] = useState(props.editNote.note || "")

    // function handleChange(e) {
    //     const {value, name} = e.target;
    //     name === "tagName" ? setTagName(value) : setNotes(value);
    // }

    // useEffect(() => {
    //     setTagName(props.editNote.title); 
    //     setNotes(props.editNote.notes);
    // }, [props.editNote.title])

    
    return (
        <div className="editor">
            <div className="add-tag">
                <input type="text" name="tagName" value={props.tagName} placeholder="Add tag..." onChange={props.handleChange} />
                <span>saved</span>
            </div>

            <div className="text-area">
                <h4> {props.tagName} </h4>
                <textarea name="notes" value={props.notes} cols="40" onChange={props.handleChange} />
            </div>
        </div>
    )
}

export default Editor;