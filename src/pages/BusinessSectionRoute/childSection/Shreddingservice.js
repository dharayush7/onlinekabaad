import React from "react";
import { Link } from "react-router-dom";

const Shreddingservice = () => {
  return (
    <div>
      <div>
        <h4 b-8gocb8pbav="">Paper Shredding Services</h4>
        <ul className="body-lg mt-8" b-8gocb8pbav="">
          <li b-8gocb8pbav="">
            The Kabadiwala provides a secure and cost-effective way to get rid
            of your personal and business confidential documents that are no
            longer useful but possess huge risk. Tossing them into the waste
            bins, just like that, can’t be an option, and locking them up
            somewhere in the office or study takes away a whole lot of storage
            space and peace of mind.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            We provide a digitised platform through ‘The Kabadiwala’ app to
            streamline pick-up on your scheduled date & time.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            Our Dedicated Executive assigned arrives at the location on your
            desired schedule and collects the documents after accurate weighing
            & inspection.
          </li>
        </ul>
        <div className="mt-5" b-8gocb8pbav="">
          <Link to="/paperShredding" className="btn-primary btn-lg">
            <span className="label-lg" b-8gocb8pbav="">
              Know More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shreddingservice;
