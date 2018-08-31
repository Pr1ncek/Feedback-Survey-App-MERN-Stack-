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
          <div>
            <li className="nav-item mr-4 align-middle text-uppercase font-weight-bold text-monospace">
              Credits: {this.props.auth.credits}
            </li>
            <li className="nav-item">
              <Payment />
            </li>
            <li className="nav-item">
              <button className="ml-2 btn-danger btn">
                <a href="/api/logout">Log out</a>
              </button>
            </li>
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
        <ul className="navbar-nav">{this.renderContent()}</ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
