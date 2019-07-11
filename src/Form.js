import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0
        }
    }

    render() {
        const { name, date, time, number } = this.state;
        return (
            <form>
                <input className='name-input'
                    type="text" 
                    name='name' 
                    value={name} 
                    placeholder='Name'
                    // onChange={} 
                />
                <input className='date-input'
                    type="text" 
                    name='date' 
                    value={date} 
                    placeholder='Date (mm/dd)'
                    // onChange={} 
                />
                <input className='time-input'
                    type="text" 
                    name='time' 
                    value={time} 
                    placeholder='Time'
                    // onChange={} 
                />
                <input className='number-input'
                    type="number" 
                    name='number' 
                    value={number} 
                    placeholder='Number of guests'
                    // onChange={}
                />
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default Form;