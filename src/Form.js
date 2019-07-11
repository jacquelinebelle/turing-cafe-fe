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

    changeStateFromInput = (e) => {
        const { name } = e.target;
        this.setState({ [name]: e.target.value });
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
                    onChange={this.changeStateFromInput} 
                />
                <input className='date-input'
                    type="text" 
                    name='date' 
                    value={date} 
                    placeholder='Date (mm/dd)'
                    onChange={this.changeStateFromInput} 
                />
                <input className='time-input'
                    type="text" 
                    name='time' 
                    value={time} 
                    placeholder='Time'
                    onChange={this.changeStateFromInput} 
                />
                <input className='number-input'
                    type="number" 
                    name='number' 
                    value={number} 
                    placeholder='Number of guests'
                    onChange={this.changeStateFromInput} 
                />
                <button className='form-btn'>Make Reservation</button>
            </form>
        )
    }
}

export default Form;