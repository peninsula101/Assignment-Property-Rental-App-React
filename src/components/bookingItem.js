import React from 'react';
import './bookingItem.css'

class BookingItem extends React.Component {
  handleIncrease = () => {
    const { booking, updateCart } = this.props;
    updateCart(booking.id, { quantity: booking.quantity + 1 });
  };

  handleDecrease = () => {
    const { booking, updateCart } = this.props;
    if (booking.quantity > 1) {
      updateCart(booking.id, { quantity: booking.quantity - 1 });
    }
  };

  render() {
    const { booking, removeFromCart } = this.props;
    return (
      <div className="booking-item">
        <h3>{booking.title}</h3>
        <p>${booking.price}</p>
        <p>Quantity: {booking.quantity}</p>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={() => removeFromCart(booking.id)}>Remove</button>
      </div>
    );
  }
}

export default BookingItem;
