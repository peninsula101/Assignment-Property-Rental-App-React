import React, { Component } from 'react';
import './checkout.css'

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: { name: '', email: '', phone: '' },
      paymentInfo: { cardNumber: '', expirationDate: '', cvv: '' }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    const [section, field] = name.split('.');
    this.setState(prevState => ({
      [section]: {
        ...prevState[section],
        [field]: value
      }
    }));
  }

  handleCheckout(event) {
    event.preventDefault();
    console.log('Contact Info:', this.state.contactInfo);
    console.log('Payment Info:', this.state.paymentInfo);
    console.log('Bookings:', this.props.bookings);
  }

  render() {
    
    return (
      <div className='checkout-page'>
        <h2>Checkout</h2>
        <form onSubmit={this.handleCheckout}>
          <div className='checkout-info-container'>
            <div className='info-container'>
              <h3>Contact Information</h3>
              <input name="contactInfo.name" type="text" placeholder="Name" value={this.state.contactInfo.name} onChange={this.handleInputChange} />
              <input name="contactInfo.email" type="email" placeholder="Email" value={this.state.contactInfo.email} onChange={this.handleInputChange} />
              <input name="contactInfo.phone" type="tel" placeholder="Phone" value={this.state.contactInfo.phone} onChange={this.handleInputChange} />
            </div>
            <div className='info-container'>
              <h3>Payment Information</h3>
              <input name="paymentInfo.cardNumber" type="text" placeholder="Card Number" value={this.state.paymentInfo.cardNumber} onChange={this.handleInputChange} />
              <input name="paymentInfo.expirationDate" type="text" placeholder="Expiration Date" value={this.state.paymentInfo.expirationDate} onChange={this.handleInputChange} />
              <input name="paymentInfo.cvv" type="text" placeholder="CVV" value={this.state.paymentInfo.cvv} onChange={this.handleInputChange} />
            </div>
          </div>          
          <button type="submit">Complete Booking</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
