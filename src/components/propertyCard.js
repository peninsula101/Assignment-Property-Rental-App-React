import React from 'react';
import './propertyCard.css'

class PropertyCard extends React.Component {
  handleBookNow = () => {
    const { property, addToCart } = this.props;
    addToCart(property);
  };

  render() {
    const { property } = this.props;
    let {amenities} = property;
    let amenitiesResult = amenities.map((item, index) => index === 1 ? item.toUpperCase() : item).join(', ');
    return (
      <div className="property-card">
        <img src={`/images/${property.image}`} alt={property.title} />
        <h3>{property.title}</h3>
        <div className='property-info'> 
          <div>
            <p>{property.description}</p>
            <p>Cost: ${property.price}</p>
          </div>
          <div>
            <p>{property.location}</p>
            <p>Bedrooms : {property.bedrooms}</p>
          </div>
        </div>
        <p>Amenities : {amenitiesResult}</p>
        <button onClick={this.handleBookNow}>Book Now</button>
      </div>
    );
  }
}

export default PropertyCard;