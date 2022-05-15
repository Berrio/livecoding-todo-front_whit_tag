import React from 'react'
import Note from './Note'
import NoteForm from './NoteForm'
import { useState } from 'react'

const NoteList = ({notes, id}) => {
  // .filter(cat =>cat.tags.filter(tag => tag.tag.includes(filter)))
  return (
    <div>
      <NoteForm id={id}/>

      {notes.map(note => <Note key={note.id} note={note}/>)}
    </div>
  )
}

export default NoteList
