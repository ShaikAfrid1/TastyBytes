import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-end gap-x-10 text-lg font-bold">
      <NavLink to="/" className={(e) => (e.isActive ? "text-black" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        className={(e) => (e.isActive ? "text-black" : "")}
      >
        Recipes
      </NavLink>
      <NavLink to="/about" className={(e) => (e.isActive ? "text-black" : "")}>
        About
      </NavLink>
      <NavLink
        to="/createrecipes"
        className={(e) => (e.isActive ? "text-black" : "")}
      >
        Create Recipes
      </NavLink>
    </div>
  );
};

export default NavBar;
