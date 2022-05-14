import React from 'react'
import Tag from './Tag'
import TagForm from './TagForm'

const TagList = ({note}) => {
    return (
        <div>

            {note.map(not => <Tag key={not.id}tag={not.tag} />)}
        </div>
    )
}

export default TagList