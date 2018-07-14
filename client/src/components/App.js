import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Landing = () => {
  return <h2>Landing</h2>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
