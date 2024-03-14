import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/contact" element={<h2>contact Page</h2>} />
    </>
  )
);
export default router;
