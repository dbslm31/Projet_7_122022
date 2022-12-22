import React from 'react';
import '../styles/Tag.css'


function Tag(props) {
    return (
        <div className='tag-item-container'>
            <div className="tag-item">{props.tag}</div>
        </div>

    )

}

export default Tag
