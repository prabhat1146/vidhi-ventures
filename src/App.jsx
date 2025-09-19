import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import About from "./components/legal/About";
import Contact from "./components/legal/Contact";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="legal" element={<Outlet />}>
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
