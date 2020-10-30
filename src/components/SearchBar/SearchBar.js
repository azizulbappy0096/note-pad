import React, {useState} from "react";
import "./SearchBar.css";

function SearchBar(props) {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        const {value} = e.target;
        setSearch(value);
    }
    return (
        <div className="search-bar">
            <div className="search-field">
                <i className="fas fa-search"></i>
                <input type="text" name="search" value={search} onChange={handleChange}/>
            </div>
            <i className="fas fa-plus plus" onClick={props.addNote}></i>
        </div>
    )
}

export default SearchBar;