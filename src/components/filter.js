import React from 'react';
import './filter.css'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      priceRange: [0, 1000],
      bedrooms: 0,
      amenities: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFilterSubmit(event) {
    event.preventDefault();
    this.props.onFilterChange(this.state);
  }

  render() {
    return (
      <form className="filter-form" onSubmit={this.handleFilterSubmit}>
        <input className="filter-input" name="location" type="text" placeholder="Location" value={this.state.location} onChange={this.handleInputChange} />
        <label>
          Min Price: 
          <input htmlfor className="filter-input" name="priceRange" type="number" placeholder="Min Price" value={this.state.priceRange[0]} onChange={(e) => this.setState({ priceRange: [e.target.value, this.state.priceRange[1]] })} />
        </label>
        <label>
          Max Price:
          <input className="filter-input" name="priceRange" type="number" placeholder="Max Price" value={this.state.priceRange[1]} onChange={(e) => this.setState({ priceRange: [this.state.priceRange[0], e.target.value] })} />
        </label>
        <input className="filter-input" name="amenities" type="text" placeholder="Amenities (comma separated)" value={this.state.amenities.join(',')} onChange={(e) => this.setState({ amenities: e.target.value.split(',') })} />
        <button className="filter-button" type="submit">Apply Filters</button>
      </form>
    );
  }
}

export default Filter;
