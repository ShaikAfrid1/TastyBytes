import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const CreateRecipes = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter Image URL!"
      />

      <br />
      <small className="text-sm text-red-400">Test Error message!</small>
      <br />

      <input
        className="border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title!"
      />

      <br />
      <textarea
        className="border-b outline-0 p-2 w-2xl"
        {...register("Description")}
        type="text"
        placeholder="Start from here!"
      ></textarea>

      <textarea
        className="border-b outline-0 p-2 w-2xl"
        {...register("Ingredients")}
        type="text"
        placeholder="Add Ingredients by Comma!"
      ></textarea>

      <textarea
        className="border-b outline-0 p-2 w-2xl"
        {...register("Instructions")}
        type="text"
        placeholder="Write Instructions!"
      ></textarea>

      <select
        className="border-b outline-0 p-3 w-xl"
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
