import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./pages/Layoute";
import HomePage from "./pages/Home";
import ProductID from "./components/Home/ProductID";
import Addproduct from "./components/product/Addproduct";
// import LatihanArrayMethod from "./LatihanArrayMethod";
// import Latihan2 from "./latihan2";
import Cart from "./components/Home/Cart";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
// import { useDispatch, useSelector } from "react-redux";
// import { SetAuthToken } from "./services/api";
// import { checkUser } from "./store/user/UserSlice";
// import { useEffect } from "react";
import AddToping from "./components/product/AddToping";
import LayouteNav from "./pages/LayouteNav";
import HomePageNav from "./pages/HomePageNav";
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<ResponsiveAppBar />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<ProductID />} />
        <Route path="/add/:id" element={<Addproduct />} />
        <Route path="/addToping/:id" element={<AddToping />} />
        <Route path="/carts" element={<Cart />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/layoutenav" element={<LayouteNav />} >
        <Route index element={<HomePageNav />} />
      </Route>

    </Routes>
  );
};

export default App;

{/* <Route path="/latihan" element={<LatihanArrayMethod />} /> */ }
{/* <Route path="/latihan2" element={<Latihan2 />} /> */ }
{/* <Route path="/carts/:id" element={<Cart />} /> */ }

{/* <Route path="/loop" element={<Forloop />} /> */ }