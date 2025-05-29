import { useContext } from "react";
// import { datacontext } from "../context/RecipeContext";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="min-h-full">
      <div className="flex flex-wrap gap-6 justify-center p-5  ">
        {renderRecipe}
      </div>
    </div>
  );
};

export default Recipes;
