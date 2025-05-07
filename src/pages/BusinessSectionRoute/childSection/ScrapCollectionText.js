import React from "react";
import { Link } from "react-router-dom";

const ScrapCollectionText = () => {
  return (
    <div>
      <h4 b-8gocb8pbav="">Scrap Collection</h4>
      <ul className="body-lg mt-8" b-8gocb8pbav="">
        <li b-8gocb8pbav="">
          If the waste is generated in bulk, then the way to deal with it can’t
          be traditional, there are few things that have to be done differently
          to provide end-to-end waste management covering all kinds of waste.
        </li>
        <li className="mt-5" b-8gocb8pbav="">
          The Kabadiwala has a well established procedure which is then cut out
          as per the business’s requirement to efficiently deal with the waste.
        </li>
        <li className="mt-5" b-8gocb8pbav="">
          Our digital platform allows the traceability and transparency of
          records and streamlines the process of data collection and reporting.
        </li>
        <li className="mt-5" b-8gocb8pbav="">
          While being associated with The Kabadiwala, the businesses and the
          brand owners can be confident of its customised bulk scrap collection
          service being compliant with the standards laid down by central
          pollution control board.
        </li>
      </ul>
      <div className="mt-5" b-8gocb8pbav="">
        <Link to="/scrapCollection" className="btn-primary btn-lg">
          <span className="label-lg" b-8gocb8pbav="">
            Know More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ScrapCollectionText;
