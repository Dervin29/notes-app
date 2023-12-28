import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaSave } from "react-icons/fa";

const Note = ({
  id,
  heading,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(heading);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    handleEditNote(id, editedHeading, editedText);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleHeadingClick = () => {
    if (!isEditing) {
      handleEditClick();
    }
  };

  const handleTextClick = () => {
    if (!isEditing) {
      handleEditClick();
    }
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <div className="content">
            <input
              className="edit-title "
              type="text"
              value={editedHeading}
              onChange={(e) => setEditedHeading(e.target.value)}
            />
            <textarea
              className="edit-text-area"
              rows={8}
              cols={10}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </div>
          <div className="note-footer">
            <FaSave size="1.3rem" onClick={handleSave} />
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 onClick={handleHeadingClick}>{heading}</h2>
            <span onClick={handleTextClick}>{text}</span>
          </div>

          <div className="note-footer">
            <p>{date}</p>
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className="delete-icon"
              size="1.3rem"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
