import React from "react";
import "./SideBar.css";

import SearchBar from "../SearchBar/SearchBar";
import Notes from "../Notes/Notes";

function SideBar(props) {
    return (
        <div className="side-bar">
            <SearchBar addNote={props.addNote} />
            <Notes handleClick={props.handleClick} called={props.called} />
        </div>
    )
}

export default SideBar;