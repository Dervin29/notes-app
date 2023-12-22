import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "13/12/2023",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "13/12/2023",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "13/12/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log(newNotes);
};

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}
