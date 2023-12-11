import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Menu from "../Pages/Menu/Menu";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
