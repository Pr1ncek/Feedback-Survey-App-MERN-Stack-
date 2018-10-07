import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="jumbotron text-center mt-3">
        <h1 className="display-4">Dashboard</h1>
        <p className="lead">View your previously created surveys.</p>
        <hr className="my-4" />
        <div className="floating-action-btn d-flex justify-content-end">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
