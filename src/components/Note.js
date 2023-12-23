import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note({ id,heading, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <div className="content">
        <h2> {heading} </h2>
        <span> {text}</span>
      </div>

      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3rem"
        />
      </div>
    </div>
  );
}
