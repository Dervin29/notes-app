import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
//props gelling: process of passing things through components till the contents reach the specfic destination

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

  //function to update the state of the note
  const addNote = (heading,text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      heading: heading,
      text: text,
      date: date.toLocaleDateString(),
    };

    //array to the existing notes and the newly added notes
    const newNotes = [...notes, newNote];
    //updates the state
    setNotes(newNotes);
    console.log(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  //function to delete the notes
  const deleteNote = (id) => {
    //to remove the note that has the same id
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  //to store in local storage
  //react-notes-app-data : key

  useEffect(() => {
    console.log("Saving to local storage:", notes);
    if(!localStorage.getItem("react-notes-app-data") || JSON.parse(localStorage.getItem("react-notes-app-data")).length === 0){
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
     
     }
    // localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    console.log("Retrieved from local storage:", savedNotes);
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);
  

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        {/* passing to notes has props */}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
