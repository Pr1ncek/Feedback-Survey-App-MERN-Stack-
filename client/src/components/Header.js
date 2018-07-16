import React, { Component } from 'react';

class Header extends Component {
render(){
  return (
    <nav>
      <div className="nav-wrapper black lighten-2">
        <a href="/" className="brand-logo right">Emaily</a>
        <ul id="nav-mobile" className="left">
          <li><a href="sass.html">Login with Google</a></li>
        </ul>
      </div>
    </nav>
  );
}
}

export default Header;
