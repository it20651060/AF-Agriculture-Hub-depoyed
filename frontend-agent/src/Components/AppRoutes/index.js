import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord/index";
import FarmerProduct from "../../Pages/FarmerProduct";
import SSFarmers from "../../Pages/SSFarmers";
import News from "../../Pages/News";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/farmerproduct" element={<FarmerProduct />}></Route>
      <Route path="/ssfarmers" element={<SSFarmers />}></Route>
      <Route path="/news" element={<News />}></Route>
    </Routes>
  );
}
export default AppRoutes;
