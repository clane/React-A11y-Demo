import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavigationList extends Component {
  render() {
    return (
      <div className="Navigation-List">
        <ul role="navigation">
          <li><Link to="HomePage">Home Page</Link></li>
          <li><Link to="Game">Game</Link></li>
          <li><Link to="Carousel">Carousel</Link></li>
          <li><Link to="Carousel_2">Carousel_2</Link></li>
          <li><Link to="NavigationMenu">Navigation Menu</Link></li>
          <li><Link to="RefsTest">RefsTest</Link></li>
          <li><Link to="SimpleNav">SimpleNav</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationList;
