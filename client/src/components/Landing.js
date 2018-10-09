import React from 'react';

const Landing = () => {
  return (
    <div className="text-center">
      <div className="">
        <h1 className="display-3">Emaily</h1>
        <p className="h3 font-weight-light">Collect Feedback From Your Users</p>
        <div className="card-group w-100 mt-3">
          <div className="card">
            <img
              className="card-img-top w-75 ml-auto mr-auto"
              src="https://png2.kisspng.com/20180422/ejq/kisspng-google-logo-pay-per-click-5adcd6037327e6.1942468215244221474717.png"
              alt="Google"
            />
            <div className="card-body">
              <h2 className="card-title font-weight-normal">
                Sign up with Google
              </h2>
              <p className="card-text lead">Login with your google account.</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top w-75 ml-auto mr-auto"
              src="https://static1.squarespace.com/static/57cde36e2994ca4d3c1de081/57db19a9bebafb407ca42be1/57db19c4ebbd1a047885f82a/1474926336449/logo-black+%283%29.png?format=500w"
              alt="Survey"
            />
            <div className="card-body">
              <h2 className="card-title font-weight-normal">Create a Survey</h2>
              <p className="card-text lead">
                Create a survey and add a list of recipients.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top w-75 ml-auto mr-auto"
              src="http://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png"
              alt="Mail"
            />
            <div className="card-body">
              <h2 className="card-title font-weight-normal">
                Collect Responses
              </h2>
              <p className="card-text lead">
                Emaily will collect and organize your feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
