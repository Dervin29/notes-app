import React from 'react'
import {MdDeleteForever} from 'react-icons/md';


export default function Note({id,text,date}) {
  return (
    <div className='note'>
        <span> {text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever className="delete-icon" size="1.3rem"/>
        </div>
    </div>
  )
}
