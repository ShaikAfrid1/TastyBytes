import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const CreateRecipes = () => {
  const { data, setdata } = useContext(recipecontext);

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(data);

    // const copyData = [...data];
    // copyData.push(recipe);
    // setdata(copyData);

    setdata([...data, recipe]);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-6  p-8 rounded-2xl shadow-xl"
    >
      <input
        className="border-b outline-0 p-3 rounded-md "
        {...register("image")}
        type="url"
        placeholder="Enter Image URL!"
      />

      <small className="text-sm text-red-400">Test Error message!</small>

      <input
        className="border-b outline-0 p-3 rounded-md"
        {...register("title")}
        type="text"
        placeholder="Recipe Title!"
      />

      <textarea
        className="border-b outline-0 p-3 rounded-md"
        {...register("Description")}
        type="text"
        placeholder="Start from here!"
      ></textarea>

      <textarea
        className="border-b outline-0 p-3 rounded-md"
        {...register("Ingredients")}
        type="text"
        placeholder="Add Ingredients by Comma!"
      ></textarea>

      <textarea
        className="border-b outline-0 p-3 rounded-md"
        {...register("Instructions")}
        type="text"
        placeholder="Write Instructions!"
      ></textarea>

      <select
        className="border-b outline-0 p-3 rounded-md"
        {...register("Category")}
        type="text"
      >
        <option value="cat-1">Category-1</option>
        <option value="cat-2">Category-2</option>
        <option value="cat-3">Category-3</option>
      </select>

      <button className="block mt-5 bg-[#C4DAD2] text-black px-4 py-2 rounded-2xl hover:bg-[#c1f1ee] focus:outline-2 focus:outline-[#c4dad2]">
        Save Recipe
      </button>
    </form>
  );
};

export default CreateRecipes;
