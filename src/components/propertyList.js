import React, { Component } from 'react';
import PropertyCard from './propertyCard';
import Filter from './filter';
import { Link } from 'react-router-dom';
import './propertyList.css'
import './Nav.css';

class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      filteredProperties: []
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const fetchedProperties = [
      { id: 1, title: 'Premium Villa', description: 'Description 1', price: 100, location: 'Location 1', bedrooms: 2, amenities: ['pool', 'WiFi'], image: 'property1.jpg' },
      { id: 2, title: 'Property 1', description: 'Description 1', price: 200, location: 'Location 3', bedrooms: 3, amenities: ['pool'], image: 'property2.jpg' },
      { id: 3, title: 'Property 2', description: 'Description 2', price: 300, location: 'Location 2', bedrooms: 2.5, amenities: ['pool', 'WiFi', 'Live- Music'], image: 'property3.jpg' },
      { id: 4, title: 'Property 3', description: 'Description 21', price: 150, location: 'Location 24', bedrooms: 4, amenities: ['Live- Music'], image: 'property4.jpg' },
      { id: 5, title: 'Property 4', description: 'Description 212', price: 250, location: 'Location 14', bedrooms: 2, amenities: ['Live- Music', 'Weathered-pool'], image: 'property5.jpg' },
      { id: 6, title: 'Property 5', description: 'Description 12', price: 275, location: 'Location 4', bedrooms: 3, amenities: ['Weathered-Pool'], image: 'property6.jpg' },
    ];
    this.setState({
      properties: fetchedProperties,
      filteredProperties: fetchedProperties
    });
  }

  handleFilterChange(filters) {
    let filtered = this.state.properties;
    if (filters.location) {
      filtered = filtered.filter(property => property.location === filters.location);
    }
    if (filters.priceRange) {
      filtered = filtered.filter(property => property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]);
    }
    if (filters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms === filters.bedrooms);
    }
    if (filters.amenities) {
      filtered = filtered.filter(property => filters.amenities.every(amenity => property.amenities.includes(amenity)));
    }
    this.setState({ filteredProperties: filtered });
  }

  render() {
    return (
      <div>
        <Filter onFilterChange={this.handleFilterChange} />
        <div className="property-list">
          {this.state.filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} addToCart={this.props.addToCart} />

          ))}
        </div>
        <div className="nav-links">
          <Link to="/cart">Go to Booking Cart</Link>
          <Link to="/checkout">Go to Checkout</Link>
        </div>
      </div>
    );
  }
}

export default PropertyList;
