// import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import { useState } from "react";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (inputNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, inputNote];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return id !== index;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
