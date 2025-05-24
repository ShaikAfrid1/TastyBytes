import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
