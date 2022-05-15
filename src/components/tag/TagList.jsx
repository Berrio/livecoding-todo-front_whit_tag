import React from 'react'
import Tag from './Tag'
import TagForm from './TagForm'
import { useState } from 'react'

const TagList = ({note}) => {
    
    return (
        <div>
              
            {note.map(not => <Tag key={not.id}tag={not.tag} />)}
        </div>
    )
}

export default TagList