import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-150 hover:scale-101 mr-3 mb-3  bg-[#215f57] block w-[23vw] rounded overflow-hidden shadow"
    >
      <img className="w-full h-[20vh] object-cover" src={image} alt="" />
      <h1 className="px-2 mt-2 font-black">{title}</h1>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}...<small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
