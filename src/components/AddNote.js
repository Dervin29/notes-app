import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [title, setTitle] = useState("");
  const characterLimit = 200;

  //the value will get updated for every key stroke
  const handleChange = (event) => {
    //limits the characters to 200
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //to save the contents in the note
  //once the save button is clicked the contents written in the note
  //is being saved
  const handleSaveClick = () => {
    //if the note is empty the note wont get added
    if (noteText.trim().length > 0) {
      handleAddNote(title, noteText);

      //note is reset to an empty note after adding
      setNoteText("");
      setTitle("");
    }
  };

  return (
    <div className="note new">
      <input
        className="title"
        type="text"
        placeholder="enter the title.."
        value={title}
        onChange={handleTitleChange}
      ></input>
      <textarea
      className="text-area"
        rows={8}
        cols={10}
        placeholder="type to add a  note.."
        onChange={handleChange}
        value={noteText}
      ></textarea>

      <div className="note-footer">
        <small className="limit">{characterLimit - noteText.length} remaining..</small>
        <MdAddCircle className ="add-btn" size="2.5rem" onClick={handleSaveClick}/>

        {/* <button className="save" onClick={handleSaveClick}>
          Save
        </button> */}
      </div>
    </div>
  );
};

export default AddNote;
