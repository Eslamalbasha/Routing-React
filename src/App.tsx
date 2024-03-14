import { RouterProvider } from "react-router-dom";
import router from "./router";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
