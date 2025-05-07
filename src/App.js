import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./components/styles/themes.css";
// import './components/styles/Navbar.css';
import "./clientStyle/contentStylemain.css";
import "./clientStyle/TKWWebsite.Client.styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

// Business folder section
import Business from "./pages/business/Business";

// Company  section
import About from "./pages/company/AboutUs";
import Contact from "./pages/company/Contact";
// import Franchise from "./pages/company/Franchise";
// import OurJourney from "./pages/company/OurJourney";

// Career section
import Careers from "./pages/Career/Careers";
import SalesAndAssociates from "./pages/Career/SalesAndAssociates";

// Helpfull section
import PrivacyPolicy from "./pages/helpUs/PrivacyPolicy";
import TermsAndConditions from "./pages/helpUs/TermsAndConditions";

// {/* services -> business section */}
import ScrapCollection from "./pages/services/business/ScrapCollection";
import ZeroWaste from "./pages/services/business/ZeroWaste";
import CSRServices from "./pages/services/business/CSRServices";
import CircularEconomy from "./pages/services/business/CircularEconomy";
import ZeroWasteEvent from "./pages/services/business/ZeroWasteEvent";
import Dismentling from "./pages/services/business/Dismentling";
import EPRServices from "./pages/services/business/EPRServices";
import PaperShredding from "./pages/services/business/PaperShredding";

// {/* services governments section */}
import DepositRefundSystem from "./pages/services/governments/DepositRefundSystem";
import IEC from "./pages/services/governments/IEC";
import MaterialRecoveryFacality from "./pages/services/governments/MaterialRecoveryFacality";

// {/* services individuals section */}
import ZeroWasteSociety from "./pages/services/individuals/ZeroWasteSociety";
import ScrapCollectionss from "./pages/services/individuals/ScrapCollectionss";
import VehicalScrapping from "./pages/services/individuals/VehicalScrapping";
// import Testimonials from './pages/testimonials/Testimonials';
import KitabGharInitiatives from "./pages/OurInitiatives/KitabGharInitiatives";
import MattressCircularJourneyInitiative from "./pages/OurInitiatives/MattressCircularJourneyInitiative";
import PlasticWallExperiment from "./pages/OurInitiatives/PlasticWallExperiment";
import TetraPakInitiative from "./pages/OurInitiatives/TetraPakInitiative";
import TreePlantationInitiative from "./pages/OurInitiatives/TreePlantationInitiative";
import ZerowasteservicesText from "./pages/BusinessSectionRoute/childSection/ZerowasteservicesText";
import ScrapCollectionText from "./pages/BusinessSectionRoute/childSection/ScrapCollectionText";
import Shreddingservice from "./pages/BusinessSectionRoute/childSection/Shreddingservice";
import MaterialRecoveryFacilityText from "./pages/BusinessSectionRoute/childSection/MaterialRecoveryFacilityText";
import IECActivityText from "./pages/BusinessSectionRoute/childSection/IECActivityText";
import EPRServiceText from "./pages/BusinessSectionRoute/childSection/EPRServiceText";
import DismantlingserviceText from "./pages/BusinessSectionRoute/childSection/DismantlingserviceText";
import CSRActivityText from "./pages/BusinessSectionRoute/childSection/CSRActivityText";
import CircularEconomyServicesText from "./pages/BusinessSectionRoute/childSection/CircularEconomyServicesText";
import WaterProofingService from "./pages/services/WaterProofingService";
import CarpenterService from "./pages/services/CarpenterService";
import RoService from "./pages/services/RoService";
import PlumbingService from "./pages/services/PlumbingService";
import PaintingService from "./pages/services/PaintingService";
import HomeSalonService from "./pages/services/HomeSalonService";
import PestControlService from "./pages/services/PestControlService";
import ElectricianService from "./pages/services/ElectricianService";
import AcService from "./pages/services/AcService";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimonials from "./pages/testimonials/Testimonials";
import { useState } from "react";
import ScrabRate from "./pages/ScrabRate";
import NewRates from "./pages/NewRates";

// testimonials section

// testimonials section

//Testing Changes
function App() {
  const [isHome, setIsHome] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scrap-rates" element={<NewRates />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
