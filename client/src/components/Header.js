import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a className="nav-item nav-link" href="/auth/google">
            Login with Google
          </a>
        );
      default:
        return (
          <a className="nav-item nav-link" href="/api/logout">
            Log out
          </a>
        );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Emaily
        </a>
          <div className="navbar-nav">{this.renderContent()}</div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
