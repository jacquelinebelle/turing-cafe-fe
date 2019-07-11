export const getReservations = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/reservations');
        if (!response.ok) {
            throw new Error('Error fetching reservations')
        }
        const reservations = await response.json();
        return reservations;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const createReservation = newReservation => {
    const options = {
        method: 'POST',
        header: {
            'Content-Type': 'Applications/JSON'
        },
        body: JSON.stringify({ ...newReservation })
    } 
    return fetch('http://localhost:3001/api/v1/reservations', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error adding reservation')
            } else {
                return response.json()
            }
        })
        .catch (error => {
            throw new Error(error.message)
        });
    }
