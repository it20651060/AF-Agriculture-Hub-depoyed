import {Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord/index";
import Inventory from "../../Pages/Inventory/index";
import Gagent from "../../Pages/Gagent/index";
import Agriagent from "../../Pages/Agriagent/index";
import AgriRules from "../../Pages/AgriRules/index";
import Companies from "../../Pages/Companies/index";
import ComProduct from "../../Pages/ComProduct/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/gagent" element={<Gagent />}></Route>
      <Route path="/agriagent" element={<Agriagent />}></Route>
      <Route path="/agrirules" element={<AgriRules />}></Route>
      <Route path="/companies" element={<Companies />}></Route>
      <Route path="/comproduct" element={<ComProduct />}></Route>
    </Routes>
  );
}
export default AppRoutes;
