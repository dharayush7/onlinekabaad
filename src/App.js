import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./clientStyle/contentStylemain.css";
import "./clientStyle/TKWWebsite.Client.styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import NewRates from "./pages/NewRates";

function App() {
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
