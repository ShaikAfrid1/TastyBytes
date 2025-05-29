import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About";
import CreateRecipes from "../Pages/CreateRecipes";
import SingleRecipe from "../Pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />} />
      <Route path="/about" element={<About />} />
      <Route path="/createrecipes" element={<CreateRecipes />} />
    </Routes>
  );
};

export default MainRoutes;
