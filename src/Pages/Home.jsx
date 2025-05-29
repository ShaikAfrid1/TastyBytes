import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const Navigate = useNavigate();

  const recipesHandler = () => {
    Navigate("/recipes");
  };

  const createHandler = () => {
    Navigate("/createrecipes");
  };
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto min-h-full text-center">
      <img
        src="https://images.unsplash.com/photo-1708335583165-57aa131a4969?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Delicious Food"
        className="rounded-xl mb-8 w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
      />

      <h1 className="text-5xl font-bold mb-6 text-primary">
        Welcome to TastyBytes 🍽️
      </h1>

      <p className="text-lg text-black mb-10">
        Your ultimate destination for discovering, creating, and sharing
        mouth-watering recipes from around the world. Whether you're a kitchen
        newbie or a seasoned chef, we've got something delicious just for you!
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        <div
          onClick={recipesHandler} /*recipesHandler*/
          className="bg-[#6A9C89] p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-[#90bbab] transition"
        >
          <h2 className="text-2xl font-semibold text-black mb-2">
            🍜 Explore Recipes
          </h2>
          <p className="text-black">
            Browse our handpicked collection of recipes — from traditional
            classics to modern fusions.
          </p>
        </div>

        <div
          onClick={createHandler}
          className="bg-[#6A9C89] p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-[#90bbab] transition"
        >
          <h2 className="text-2xl font-semibold text-black mb-2">
            🧑‍🍳 Create Your Own
          </h2>
          <p className="text-black">
            Got your own secret masala? Share it with the world and inspire
            other foodies!
          </p>
        </div>
      </div>

      <p className="text-black italic animate-pulse ">
        <b>
          "Cooking is like love — it should be entered into with abandon or not
          at all." – Harriet Van Horne
        </b>
      </p>
    </div>
  );
};

export default Home;
