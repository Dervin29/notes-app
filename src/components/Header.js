import React from 'react'
import { FaClipboard } from "react-icons/fa";

function Header({handleToggleDarkMode}) {
  return (
    <div className='header'>
        <h1><FaClipboard />ScribbleSync</h1>
        <button onClick={()=> handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className='save'>Toggle Mode</button>
    </div>
  )
}

export default Header