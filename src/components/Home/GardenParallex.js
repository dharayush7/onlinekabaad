import { FaTree } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaTint } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";

const GardenParallex =()=>{

    return(<section>

    <style>{
        `
        .garden_parallax_div
        {
            width: 100%;
            background-image: url(./images/garden.jpg);
            background-attachment: fixed;
            background-size: cover;
            padding: 10px 0 40px;
            position: relative;
        
        }

        .eco_home_count {
                position: relative;
                display: inline-block;
                width: 180px;
                height: 180px;
                padding: 20px;
                text-align: center;
                margin: 0;
                background: rgba(255, 255, 255, 0.7);
                border: none;
                color: #009c1a;
                border-radius: 100%;
                margin-bottom: 20px;
            }
            .eco_count_number_border {
                width: 38%;
                margin: 0 auto;
                background: #69af07;
                height: 1px;
                margin-bottom: 12px;
            }

            .appear-count {
                font-size: 18px!important;
                line-height: 10px!important;
                margin: 15px 0!important;
                padding-bottom: 0!important;
                font-weight: 700;
               
            }

            .appear-count-para{
                font-size: 16px!important;
                color: #009c1a;
                font-weight:bold;
            }
            .gardenIcons, .gardenIcons svg {
                font-size :32px;
                color:#69af07 !important;
            }

        `

        }
    </style>

    <section className="garden_parallax_div text-center">
		<h2>&nbsp;</h2>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="eco_home_count">
                            <FaTree className="gardenIcons"/>
							<div className="count appear-count" data-from="0" data-to="4500+" data-speed="2000" data-refresh-interval="50">4500+</div>
							<div className="eco_count_number_border" ></div>
							<p className="text-uppercase appear-count-para">TREES SAVED</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="eco_home_count"> 
                        <FaChild className="gardenIcons"/>
							<div className="count appear-count" data-from="0" data-to="10000+" data-speed="2000" data-refresh-interval="50">10000+</div>
							<div className="eco_count_number_border"></div>
							<p className="text-uppercase appear-count-para" >HAPPY CUSTOMERS</p>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="eco_home_count"> 
                        <FaPlug className="gardenIcons"/>
							<div className="appear-count" data-from="0" data-to="39L KW" data-speed="2000" data-refresh-interval="50">39L KW</div>
							<div className="eco_count_number_border"></div>
							<p className="text-uppercase appear-count-para">ENERGY CONSERVE</p>
						</div>
					</div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="eco_home_count"> 
                        <FaTint className="gardenIcons"/>
							<div className="count appear-count" data-from="0" data-to="442320+" data-speed="2000" data-refresh-interval="50">442320+</div>
							<div className="eco_count_number_border"></div>
							<p className="text-uppercase appear-count-para">WATER SAVED</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    
    
    
    </section>);
};


export default GardenParallex;