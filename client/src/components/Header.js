import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <Link to={this.props.auth ? '/surveys' : '/'} className="navbar-brand">
          Emaily
        </Link>
        <div className="navbar-nav">{this.renderContent()}</div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
