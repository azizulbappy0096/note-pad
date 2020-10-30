import React from "react";
import "./EditorSettings.css";

function EditorSettings(props) {

    function handleClick() {
        //e.preventDefault();
        if(props.id) {
            props.handleUpdate()
        } else if(!props.id) {
            props.handleSave()
        }
    }
    console.log(props.id)
    return (
        <div className="editor-settings">
            <div className="settings">
            <i className="fas fa-info-circle"></i>
            <i className="far fa-save" onClick={handleClick} ></i>
            <i className="far fa-trash-alt" onClick={props.handleRemove} ></i>
            <i className="fas fa-ellipsis-h"></i>
            </div>

            <div className="user">
                <p>azizulbappy6@gmail.com</p>
                <i className="fas fa-caret-down"></i>
            </div>

        </div>
    )
}

export default EditorSettings;