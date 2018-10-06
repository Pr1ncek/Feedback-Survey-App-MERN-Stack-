import React from 'react';
import { Link } from 'react-router';

const Dashboard = () => {
  return (
    <div>
      <h2 className="ml-auto mr-auto">Dashboard</h2>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
