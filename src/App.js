import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './components/propertyList';
import BookingCart from './components/bookingCart';
import Checkout from './components/checkout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  addToCart(property) {
    this.setState(prevState => ({
      bookings: [...prevState.bookings, { ...property, quantity: 1 }]
    }));
  }

  removeFromCart(propertyId) {
    this.setState(prevState => ({
      bookings: prevState.bookings.filter(booking => booking.id !== propertyId)
    }));
  }

  updateCart(propertyId, bookingDetails) {
    this.setState(prevState => ({
      bookings: prevState.bookings.map(booking => 
        booking.id === propertyId ? { ...booking, ...bookingDetails } : booking
      )
    }));
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PropertyList addToCart={this.addToCart} />} />
          <Route path="/cart" element={<BookingCart bookings={this.state.bookings} removeFromCart={this.removeFromCart} updateCart={this.updateCart} />} />
          <Route path="/checkout" element={<Checkout bookings={this.state.bookings} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
