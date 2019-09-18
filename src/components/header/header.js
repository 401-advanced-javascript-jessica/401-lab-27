import React from 'react';
import './header.scss';

/**
 * Header renders a title for the top of the page
 *
 *  @visibleName Header
 */
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Counters R Fun</h1>
      </header>
    );
  }
}

export default Header;
