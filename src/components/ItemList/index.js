import React from 'react';
import './styles.css';

function ItemList({title,description}){
    return (
        <div className='ItemList'>
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
    )
}

export default ItemList;