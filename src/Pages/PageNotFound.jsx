import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b221f] text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-9xl font-extrabold tracking-widest text-red-600 animate-bounce">
        404
      </h1>
      <div className="bg-yellow-400 text-black px-3 py-1 text-sm rounded rotate-3 mt-4">
        Page Not Found
      </div>

      <p className="mt-6 text-center max-w-md text-gray-400 text-lg">
        Oppss... looks like you took a wrong turn on the internet highway. This
        page doesn't exist. Or maybe it ran away 👻
      </p>

      <img
        src="https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif"
        alt="Confused Travolta"
        className="w-72 mt-6 rounded-xl shadow-lg"
      />

      <Link
        to="/"
        className="mt-10 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300"
      >
        🏠 Take Me Home
      </Link>
    </div>
  );
};

export default PageNotFound;
