import React from 'react';
import './CardContainer.css';
import Card from './Card';

const CardContainer = ({ reservations }) => {
    const displayReservations = reservations.map(reservation => {
        return <Card {...reservation} key={reservation.id} />
    });

    return(
        <main className='container'>
            {displayReservations}
        </main>
    )
}

export default CardContainer;