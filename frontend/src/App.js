import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HomePage
import HomePage from "./Pages/Home-Page/HomePage";

import Header from "./Pages/Home-Page/Header";

import RulesDisplay from "./Pages/Home-Page/RulesDisplay";

import NewsDisplay from "./Pages/Home-Page/NewsDisplay";

import ComProduct from "./Pages/Home-Page/ComProduct";

import FarmProduct from "./Pages/Home-Page/FarmProduct";

function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage */}

        <Route path='/' element={<HomePage />} />
      
        <Route path="/header" element={<Header />} />


        <Route path="/rules" element={<RulesDisplay />} />

        <Route path="/news" element={<NewsDisplay />} />


        <Route path="/comproduct" element={<ComProduct />} />

        <Route path="/farmproduct" element={<FarmProduct />} />


      </Routes>
    </Router>
  );
}

export default App;
