import { useState, createContext,useEffect } from "react";
import axios from 'axios'
export const ApiContext = createContext();

export const ApiContextProvider = ({children}) => {

  const [recipes, setRecipes] = useState([]);
  const [changeRecipe, setChangeRecipe] = useState("");
  const [isLoading, setIsLoading] = useState({
    read: false,
    delete: false,
    add: false,
  });

  useEffect(() => {
   
    const getRecipes = async () => {
      setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));
      try {
        const res = await axios.get("http://localhost:3000/recipes");
        setRecipes(res.data);
      } catch (error) {
        console.log("There was an error while fetching the recipes");
      }
      setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: false }));
    };
    getRecipes();
  }, []);

  const addRecipeToList = async (newRecipe) => {
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
    
    try {

      const res = await axios.post("http://localhost:3000/recipes", newRecipe);
      setRecipes([...recipes, newRecipe]);
      // console.log(res.data);
    } catch (error) {
      alert("There was an error posting the new recipe!", error);
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
  };

  const deleteRecipe = async (id) => {
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: true }));

    try {
      const res = await axios.delete("http://localhost:3000/recipes/" + id);
      if (res.status === 200) {
        setRecipes((prevRecipeList) =>
          prevRecipeList.filter((recipe) => recipe.id !== id)
        );
      }
    } catch (error) {
      alert("There was an error deleting the new recipe!");
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: false }));
  };

  const startEditing = (recipe) => {
    setChangeRecipe(recipe);

  };

  const editRecipe = async (id, getRecipe) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/recipes/${id}`,
        getRecipe
      );

      if (response.status === 200) {
        const updatedRecipe = recipes.map((recipe) =>
          recipe.id === id ? { ...recipe, ...getRecipe } : recipe
        );
        setRecipes(updatedRecipe);
        setChangeRecipe("");
      }
    } catch (error) {
      alert("There was an error updating the recipe!");
    }
  };

  console.log(recipes)
  return( <ApiContext.Provider value={{ recipes, changeRecipe, isLoading, addRecipeToList, deleteRecipe, startEditing, editRecipe }}>
    {children}
  </ApiContext.Provider>)
};

export default ApiContext;
