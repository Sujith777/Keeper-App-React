import React, { useState } from "react";
import { Fab, Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const InputArea = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(true);
  };
  const [inputNote, setInputNote] = useState({ title: "", content: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };
  const submitNote = (event) => {
    props.onAdd(inputNote);
    setInputNote({ title: "", content: "" });
    event.preventDefault();
  };
  return (
    <form className="create-note">
      {isExpanded && (
        <input
          type="text"
          name="title"
          value={inputNote.title}
          placeholder="Title"
          onChange={handleChange}
        />
      )}
      <textarea
        rows={isExpanded ? 3 : 1}
        name="content"
        value={inputNote.content}
        placeholder="Take a note..."
        onChange={handleChange}
        onClick={handleExpand}
      />
      <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default InputArea;
