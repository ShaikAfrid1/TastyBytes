import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const SingleRecipe = () => {
  const Navigate = useNavigate();
  const params = useParams();
  const { data, setdata } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      desc: recipe.desc,
      ing: recipe.ing,
      inst: recipe.inst,
      ctrg: recipe.ctrg,
    },
  });

  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setdata(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("Recipe Updated!");
  };

  //   console.log(recipe);
  const deleteHandler = () => {
    const filterData = data.filter((r) => r.id != params.id);
    setdata(filterData);
    toast.success("Recipe Deleted!");
    Navigate("/recipes");
  };
  return recipe ? (
    <div className=" min-h-full ">
      <div className="flex w-full justify-between">
        <div className=" left w-1/2 p-2">
          <h1 className="text-5xl font-black">{recipe.title}</h1>
          <img
            className="mt-6 h-60 left-96 rounded drop-shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            src={recipe.image}
            alt=""
          />
          <div>
            <h4 className="font-black mt-4">Ingredients:</h4>
            <p>{recipe.ing}</p>
            <h4 className="font-black mt-4">Instructions:</h4>
            <p>{recipe.inst}</p>
          </div>
        </div>

        <div className="right w-1/2 p-2">
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="flex flex-col gap-6  p-8 rounded-2xl shadow-xl"
          >
            <input
              className="border-b outline-0 p-3 rounded-md "
              {...register("image")}
              type="url"
              placeholder="Enter Image URL!"
            />

            {/* <small className="text-sm text-red-400">Test Error message!</small> */}

            <input
              className="border-b outline-0 p-3 rounded-md"
              {...register("title")}
              type="text"
              placeholder="Recipe Title!"
            />

            <textarea
              className="border-b outline-0 p-3 rounded-md"
              {...register("desc")}
              type="text"
              placeholder="Start from here!"
            ></textarea>

            <textarea
              className="border-b outline-0 p-3 rounded-md"
              {...register("ing")}
              type="text"
              placeholder="Add Ingredients by Comma!"
            ></textarea>

            <textarea
              className="border-b outline-0 p-3 rounded-md"
              {...register("inst")}
              type="text"
              placeholder="Write Instructions!"
            ></textarea>

            <select
              className="border-b outline-0 p-3 rounded-md"
              {...register("ctrg")}
              type="text"
            >
              <option value="Veg">Vegitarian</option>
              <option value="Non-Veg">Non-Vegitarian</option>
            </select>

            <button className="block mt-5 bg-green-500 text-black px-4 py-2 rounded-2xl hover:bg-green-600 focus:outline-2 focus:outline-[#c4dad2]">
              Update Recipe
            </button>
            <button
              onClick={deleteHandler}
              className="block mt-5 bg-red-400 text-black px-4 py-2 rounded-2xl hover:bg-red-500 focus:outline-2 focus:outline-[#c4dad2]"
            >
              Delete Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
