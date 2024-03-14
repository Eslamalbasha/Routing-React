import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-sm mx-auto my-7">
      <ul className="flex items-center justify-between">
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
