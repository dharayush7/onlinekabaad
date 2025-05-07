import React from "react";
import { Link } from "react-router-dom";

const ZerowasteservicesText = () => {
  return (
    <div>
      <div>
        <h4 b-8gocb8pbav="">Zero Waste Services</h4>
        <ul className="body-lg mt-8" b-8gocb8pbav="">
          <li b-8gocb8pbav="">
            Zero waste aims at completely wiping away the waste out of existence
            by practising the 5R’s principle of waste management.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            Refuse what we don’t need, Reduce what we need, Reuse what we
            actually consume, Recycle what we can’t refuse, reduce or recycle
            and Rot the rest.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            Hence, close the loop of the linear economy and send nothing to
            landfills, incinerators and the ocean which would otherwise harm the
            environment and result in climate change, pollution and scarcity of
            resources to meet the growing demands.
          </li>
        </ul>
        <div className="mt-5" b-8gocb8pbav="">
          <Link to="/zeroWaste" className="btn-primary btn-lg">
            <span className="label-lg" b-8gocb8pbav="">
              Know More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZerowasteservicesText;
