import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import Layout from "../pages/Layaout";
import HomePage from "../pages";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </>
  )
);
export default router;
