import React from "react";
import { Link } from "react-router-dom";

const MaterialRecoveryFacilityText = () => {
  return (
    <div>
      <div>
        <h4 b-8gocb8pbav="">Material Recovery Facility</h4>
        <ul className="body-lg mt-8" b-8gocb8pbav="">
          <li b-8gocb8pbav="">
            The Kabadiwala is dedicated to accelerating the circular economy, by
            recovering resources from the waste, thereby preventing unwanted
            landfills.ble for the collection & recycling of the plastic waste
            they introduce in the market through their products, as per the
            Plastic Waste Management rules 2016.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            To achieve that, The Kabadiwala comes as a management partner for
            the MRF - Material Recovery Facility where the waste collected by
            the local municipality vehicles from various households, businesses,
            institutions, and other bulk waste generators, are stored at MRF
            centres for further processing and then considering the nature of
            recovered materials, sent for recycling and reuse.
          </li>
          <li className="mt-5" b-8gocb8pbav="">
            If not managing directly, The Kabadiwala helps the ULBs and Gram
            Panchayats by providing Consultancy Services to formulate the plan
            of action on integrative management of mixed-up resources & joining
            the open loop of the linear economy to generate revenue and
            environmental solutions into the bargain.
          </li>
        </ul>
        <div className="mt-5" b-8gocb8pbav="">
          <Link to="/materialRecoveryFacality" className="btn-primary btn-lg">
            <span className="label-lg" b-8gocb8pbav="">
              Know More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaterialRecoveryFacilityText;
