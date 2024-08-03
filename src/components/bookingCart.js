import React, { Component } from 'react';
import BookingItem from './bookingItem';
import { Link } from 'react-router-dom';
import './bookingCart.css'
import './Nav.css';

class BookingCart extends Component {
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
      bookings: [...prevState.bookings, property]
    }));
  }

  removeFromCart(propertyId) {
    this.setState(prevState => ({
      bookings: prevState.bookings.filter(booking => booking.id !== propertyId)
    }));
  }

  updateCart(propertyId, bookingDetails) {
    this.setState(prevState => ({
      bookings: prevState.bookings.map(booking => booking.id === propertyId ? { ...booking, ...bookingDetails } : booking)
    }));
  }

  render() {
    const { bookings, removeFromCart, updateCart } = this.props;
    return (
      <div className='body-code'>
        <h2>Booking Cart</h2>
        {bookings.map(booking => (
          <BookingItem 
            key={booking.id} 
            booking={booking} 
            removeFromCart={removeFromCart} 
            updateCart={updateCart} 
          />
        ))}
        <p>Total: ${bookings.reduce((total, booking) => total + booking.price * booking.quantity, 0)}</p>
        <div className="nav-links">
          <Link to="/">Back to Property List</Link>
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
      </div>
    );
  }
}

export default BookingCart;
