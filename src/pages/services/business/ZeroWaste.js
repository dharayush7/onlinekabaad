
import React, { useEffect, useState } from 'react'

import Contact from "../../company/Contact"
import OtherServicesFormRouter from '../../OtherServicesFolder/OtherServicesFormRouter'

const ZeroWaste = () => {
const RouterData =[
    {
      name:"CSR Services → ",
      rou:"/csrservices"
    },
    {
      name:"Circular Economy Services →",
      rou:"/circularEconomy"
    },
    {
      name:"EPR Services →",
      rou:"/eprservices"
    },
    {
      name:"Dismantling Services →",
      rou:"/dismentling"
    },
    {
      name:"Shredding Services →",
      rou:"/paperShredding"
    }

  ]
  const [data,setdata]=useState(RouterData)
useEffect(()=>{},[data])

  return (
    <div>
        <main className="content" b-xpiygqfdvj="">
  <div className="position-relative dark-theme">
    <img
      src="../images/services/zero-waste-services/zero-waste-service-hero.webp"
      className="w-100"
      style={{ height: "35vh", objectFit: "cover" }}
      alt="erp service"
    />
    <div className="position-absolute bottom-0 w-100">
      <div className="container-fluid px-lg-11">
        <h2>Zero Waste Sevices</h2>
      </div>
    </div>
  </div>
  <div className="container pb-14 pt-10">
    <div className="row gx-lg-13">
      <div className="col-12 col-lg-8">
        <div className="body-lg">
          Zero waste aims at completely wiping away the waste out of existence
          by practising the 5R’s principle of waste management. Refuse what we
          don’t need, Reduce what we need, Reuse what we actually consume,
          Recycle what we can’t refuse, reduce or recycle and Rot the rest.
          Hence, close the loop of the linear economy and send nothing to
          landfills, incinerators and the ocean which would otherwise harm the
          environment and result in climate change, pollution and scarcity of
          resources to meet the growing demands.
        </div>
        <h5 className="fg-default-1 pb-8 pt-11">Whom We Cater</h5>
        <div className="row">
          <div className="col-lg-3 pt-4 col-12">
            <div className="card card-media-top rounded-5">
              <div className="media">
                <img
                  src="../images/services/zero-waste-services/institutes.webp"
                  className="mw-100 w-100"
                  alt="institutes"
                />
              </div>
              <div className="card-body">
                <div className="title-lg text-center">
                  <a href="zero-waste-institute.html">Institutes →</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-4 col-12">
            <div className="card card-media-top rounded-5">
              <div className="media">
                <img
                  src="../images/services/zero-waste-services/offices.webp"
                  className="mw-100 w-100"
                  alt="offices"
                />
              </div>
              <div className="card-body">
                <div className="title-lg text-center">
                  <a href="zero-waste-office.html">Offices →</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-4 col-12">
            <div className="card card-media-top rounded-5">
              <div className="media">
                <img
                  src="../images/services/zero-waste-services/societies.webp"
                  className="mw-100 w-100"
                  alt="societies"
                />
              </div>
              <div className="card-body">
                <div className="title-lg text-center">
                  <a href="zero-waste-society.html">Societies →</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-4 col-12">
            <div className="card card-media-top rounded-5">
              <div className="media">
                <img
                  src="../images/services/zero-waste-services/events.webp"
                  className="mw-100 w-100"
                  alt="events"
                />
              </div>
              <div className="card-body">
                <div className="title-lg text-center">
                  <a href="zero-waste-events.html">Events →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 d-none d-lg-block">
      <OtherServicesFormRouter item={data}/>

      </div>
    </div>
  </div>
<Contact/>
</main>

    </div>
  )
}

export default ZeroWaste