import React from 'react';
import houses from "../houses";
import '../styles/Tag.css'


function Tag(props) {
    return (
        <div className='tag-item-container'>
            <div className="tag-item">{props.tag}</div>
        </div>

    )

}

export default Tag
