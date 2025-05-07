import React from "react";
import { Link } from "react-router-dom";

const DismantlingserviceText = () => {
  return (
    <div>
      <div>
        <h4 b-8gocb8pbav="">Dismantling Services</h4>
        <ul className="body-lg mt-8" b-8gocb8pbav="">
          <li b-8gocb8pbav="">
            For the sustainable disposal of the scrap, the dismantling process
            plays the most critical part where dismantled items are segregated
            into marketable fractions to be repaired and reused, while the rest
            of the hazardous components are removed from end-of-life products
            and securely transferred to the authorised recyclers to prevent them
            from ending up in our dumping grounds which otherwise not just
            pollute our environment but also create a grave occupational hazard
            for the waste workers.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            The nature of the recyclables are carefully taken into account
            before sending them to the concerned recyclers for their right
            disposal.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            Apart from dismantling services, The Kabadiwala team is engaged in
            carrying out the pre-processing of the recycling service, to later
            send the baled material to the authorised recyclers for further
            processing.
          </li>
        </ul>
        <div className="mt-5" b-8gocb8pbav="">
          <Link to="/dismentling" className="btn-primary btn-lg">
            <span className="label-lg" b-8gocb8pbav="">
              Know More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DismantlingserviceText;
