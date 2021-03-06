import React, { Component } from 'react';
import { getReservations, createReservation } from './apiCalls';
import './App.css';
import CardContainer from './CardContainer';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const reservations = await getReservations();
      this.setState({ reservations })
      console.log(reservations)
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  addReservation = async reservation => {
    const newReservation = {...reservation, id: Date.now()};
    const reservations = [...this.state.reservations, newReservation];
    this.setState({ reservations });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
