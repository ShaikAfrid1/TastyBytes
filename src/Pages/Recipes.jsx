import { useContext } from "react";
// import { datacontext } from "../context/RecipeContext";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ));
  return <div>{renderRecipe}</div>;
};

export default Recipes;
