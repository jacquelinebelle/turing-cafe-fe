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

