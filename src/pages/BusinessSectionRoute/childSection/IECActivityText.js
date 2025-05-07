import React from "react";
import { Link } from "react-router-dom";

const IECActivityText = () => {
  return (
    <div>
      <div>
        <h4 b-8gocb8pbav="">IEC Activity</h4>
        <ul className="body-lg mt-8" b-8gocb8pbav="">
          <li b-8gocb8pbav="">
            EC stands for information, education and communication, is a public
            health system approach aiming at changing or reinforcing
            health-related behaviours in a target audience, concerning a
            specific problem and within a predefined period of time, through
            communication methods and principles.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            The Kabadiwala extends its service to the Urban local bodies to
            carry out the IEC on waste management effectively and in the best
            possible way. The aim is to bring behavioural change in the masses
            by adopting safe and sustainable waste practices.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            For that, The Kabadiwala engages its team in spreading awareness
            across the community about the importance of the 3 R’s - Reduce,
            Reuse, and Recycle. Then, educating them about the type of waste and
            its segregation at source and how it can contribute to increasing
            the recycling rate, thereby reducing waste pollution.
          </li>
        </ul>
        <div className="mt-5" b-8gocb8pbav="">
          <Link to="/iec" className="btn-primary btn-lg">
            <span className="label-lg" b-8gocb8pbav="">
              Know More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IECActivityText;
