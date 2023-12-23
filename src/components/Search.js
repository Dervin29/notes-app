import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search({handleSearchNote}) {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size="1.3em" />
        <input type='text' className="s-input" onChange={(event)=>handleSearchNote(event.target.value)} placeholder='type to search..'/>
    </div>
  )
}
