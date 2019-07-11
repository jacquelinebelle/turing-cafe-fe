import React from 'react';
import './CardContainer.scss';
import Card from './Card';

const CardContainer = ({ reservations }) => {
    const displayReservations = reservations.map(reservation => {
        return <Card {...reservation} key={reservation.id} />
    });

    return(
        <main>
            {displayReservations}
        </main>
    )
}

export default CardContainer;