import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';
import './header.css';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <button className="ml-4 btn-primary btn">
            <a href="/auth/google">Login with Google</a>
          </button>
        );
      default:
        return (
          <div className="mr-2">
            <Payment />
            <button className="ml-4 btn-danger btn">
              <a href="/api/logout">Log out</a>
            </button>
          </div>
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
