import React from 'react';
import './Card.css';

const Card = ({ date , id, name, number, time }) => {
    return (
        <article className='card' key={id}>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
            <button className='cancel-btn'>Cancel</button>
        </article>
    )
}

export default Card;