import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      heading: "First note",
      text: "this is my first note",
      date: "13/12/2023",
    },
    {
      id: nanoid(),
      heading: "Second note",
      text: "this is my second note",
      date: "13/12/2023",
    },
    {
      id: nanoid(),
      heading: "Third note",
      text: "this is my third note",
      date: "13/12/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Saving to local storage:", notes);
    if (
      !localStorage.getItem("react-notes-app-data") ||
      JSON.parse(localStorage.getItem("react-notes-app-data")).length === 0
    ) {
      localStorage.setItem(
        "react-notes-app-data",
        JSON.stringify(notes)
      );
    }
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data")
    );
    console.log("Retrieved from local storage:", savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNote = (heading, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      heading: heading,
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  const editNote = (id, editedHeading, editedText) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
  
    const editedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, heading: editedHeading, text: editedText, date: formattedDate }
        : note
    );
  
    setNotes(editedNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(editedNotes));
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
    </div>
  );
}
