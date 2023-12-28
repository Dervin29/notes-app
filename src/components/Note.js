import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

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
            <FaSave
              size="1.3rem"
              onClick={handleSave}
              data-tooltip-id="save"
              data-tooltip-content="save"
              data-tooltip-place="right"
            />
            <Tooltip id="save" />
          </div>
        </>
      ) : (
        <>
          <div>
            <h2
              data-tooltip-id="heading"
              data-tooltip-content="click to edit heading"
              data-tooltip-place="bottom"
              data-tooltip-offset={40}
              data
              onClick={handleHeadingClick}
            >
              {heading}
            </h2>
            <Tooltip id="heading" />
            <span
              data-tooltip-id="text"
              data-tooltip-content="click to edit text"
              data-tooltip-place="bottom"
              onClick={handleTextClick}
            >
              {text}
            </span>
            <Tooltip id="text" />
          </div>

          <div className="note-footer">
            <p>{date}</p>
            <MdDeleteForever
              data-tooltip-id="text"
              data-tooltip-content="delete this note"
              data-tooltip-place="left"
              onClick={() => handleDeleteNote(id)}
              className="delete-icon"
              size="1.3rem"
            />
            <Tooltip id="delete" />
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
