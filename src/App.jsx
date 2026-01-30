import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import ExchangeRate from "./pages/mrp/master/ExchangeRate";
import HierarchyMaster   from "./pages/MRP/Master/HierarchyMaster";
import CustomerMaster   from "./pages/MRP/Master/CustomerMaster";
import CompanyMaster   from "./pages/MRP/Master/CompanyMaster";
import ItemMaster   from "./pages/MRP/Master/ItemMaster";
import ItemGroup   from "./pages/MRP/Master/ItemGroup";
import VendorMaster from "./pages/MRP/Master/VendorMaster";
import VendorItems from "./pages/MRP/Master/VendorItems";
import CostingGroup from "./pages/MRP/Master/CostingGroup";
import NewDevelopmentRequest from "./pages/MRP/Master/NewDevelopmentRequest";
import ConstructionMaster from "./pages/MRP/Master/ConstructionMaster";
import ShoeTypeMaster from "./pages/MRP/Master/ShoeTypeMaster";
import PatternMaster from "./pages/MRP/Master/PatternMaster";
import ProductCategory from "./pages/MRP/Master/ProductCategory";
import SeasonMaster from "./pages/MRP/Master/SeasonMaster";
import MaterialCategory from "./pages/MRP/Master/MaterialCategory";
import ToolingMaster from "./pages/MRP/Master/ToolingMaster";
// import MouldAvailability from "./pages/MRP/Master/MouldAvailability";
import SampleTypeMaster from "./pages/MRP/Master/SampleTypeMaster";
import UOMMaster from "./pages/MRP/Master/UOMMaster";
import WidthMaster from "./pages/MRP/Master/WidthMaster";
import SizeTypeMaster from "./pages/MRP/Master/SizeTypeMaster";
import ShoeCategory from "./pages/MRP/Master/ShoeCategory";
import CurrencyMaster from "./pages/MRP/Master/CurrencyMaster";
import BusinessUnitMaster from "./pages/MRP/Master/BusinessUnitMaster";


function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Layout */}
        <Route
          path="/"
          element={token ? <AdminLayout /> : <Navigate to="/login" />}
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="mrp/master/exchange-rate"
            element={<ExchangeRate />}
          />
            <Route
            path="mrp/master/hierarchy-master"
            element={<HierarchyMaster />}
          />
           <Route
            path="mrp/master/customer-master"
            element={<CustomerMaster />}
          />
          <Route
            path="mrp/master/company-master"
            element={<CompanyMaster />}
          />
           <Route
            path="mrp/master/item-group"
            element={<ItemGroup />}
          />
           <Route
            path="mrp/master/item-master"
            element={<ItemMaster />}
          />
            <Route
            path="mrp/master/Vendor-master"
            element={<VendorMaster />}
          />
           <Route
            path="mrp/master/Vendor-items"
            element={<VendorItems />}
          />
           <Route
            path="mrp/master/costing-group"
            element={<CostingGroup />}
          />
           <Route
            path="mrp/master/new-development-request"
            element={<NewDevelopmentRequest />}
          />
           <Route
            path="mrp/master/construction-master"
            element={<ConstructionMaster />}
          />
           <Route
            path="mrp/master/shoe-type-master"
            element={<ShoeTypeMaster />}
          />
          <Route
            path="mrp/master/pattern-master"
            element={<PatternMaster />}
          />
           <Route
            path="mrp/master/Product-category-master"
            element={<ProductCategory />}
          />
            <Route
            path="mrp/master/Season-master"
            element={<SeasonMaster />}
          />
           <Route
            path="mrp/master/Material-Category-master"
            element={<MaterialCategory />}
          />
          <Route
            path="mrp/master/Tooling-master"
            element={<ToolingMaster />}
          />
           <Route
            path="mrp/master/Sample-Type-master"
            element={<SampleTypeMaster />}
          />
           <Route
            path="mrp/master/UOM-master"
            element={<UOMMaster />}
          />
          <Route
            path="mrp/master/Width-master"
            element={<WidthMaster />}
          />
           <Route
            path="mrp/master/Size-Type-master"
            element={<SizeTypeMaster />}
          />
           <Route
            path="mrp/master/Shoe-Category-master"
            element={<ShoeCategory />}
          />
           <Route
            path="mrp/master/Currency-master"
            element={<CurrencyMaster />}
          />
          <Route
            path="mrp/master/Business-Unit-master"
            element={<BusinessUnitMaster />}
          />
           {/* <Route
            path="mrp/master/Mould-Availability-master"
            element={<MouldAvailability />}
          /> */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
