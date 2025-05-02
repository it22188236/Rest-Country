import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Country from "./pages/Country";
import CountryDetails from "./pages/CountryDetails";

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Country/>}/>
          <Route path="/:countryName" element={<CountryDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;