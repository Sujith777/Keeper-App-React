import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const removeNote = (event) => {
    props.onDelete(props.id);
    event.preventDefault();
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={removeNote}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default Note;
