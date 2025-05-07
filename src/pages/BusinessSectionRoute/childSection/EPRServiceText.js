import React from "react";
import { Link } from "react-router-dom";

const EPRServiceText = () => {
  return (
    <>
      <div>
        <h4 b-8gocb8pbav="">Extended Producer Responsibility (EPR)</h4>
        <ul className="body-lg mt-8" b-8gocb8pbav="">
          <li b-8gocb8pbav="">
            Extended Producer Responsibility also known as EPR is an obligation
            imposed on Producers, Importers and Brand owners in which they stand
            responsible for the collection & recycling of the plastic waste they
            introduce in the market through their products, as per the Plastic
            Waste Management rules 2016.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            The Kabadiwala has a well established procedure which is then cut
            out as per the business’s requirement to efficiently deal with the
            waste.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            We provide you assistance with all the legal documentation
            requirements to initiate the EPR fulfilment process.
          </li>
        </ul>
        <div className="mt-5" b-8gocb8pbav="">
          <Link to="/eprservices" className="btn-primary btn-lg">
            <span className="label-lg" b-8gocb8pbav="">
              Know More
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EPRServiceText;
