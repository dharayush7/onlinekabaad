import React from "react";
import { Link } from "react-router-dom";

const CSRActivityText = () => {
  return (
    <div>
      <div>
        <h4 b-8gocb8pbav="">Corporate Social Responsibility Services</h4>
        <ul className="body-lg mt-8" b-8gocb8pbav="">
          <li b-8gocb8pbav="">
            The overall objective of Corporate Social Responsibility is to
            combine economic progress, social justice & environmental
            preservation.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            Based on its corporate social responsibility, a company can ensure
            that its economic growth is in compliance with the expectations &
            comfort of its key stakeholders including the suppliers, employees,
            customers and the local population, while minimising the impacts on
            the environment.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            We aim to provide out of the box campaign ideas to the companies as
            it better serves the purpose of making a bigger impact on the
            community & the environment on the whole.
          </li>
        </ul>
        <div className="mt-5" b-8gocb8pbav="">
          <Link to="/csrservices" className="btn-primary btn-lg">
            <span className="label-lg" b-8gocb8pbav="">
              Know More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CSRActivityText;
