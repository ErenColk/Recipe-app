import React, { useState,useContext } from "react";
import styles from "./AddRecipe.module.css";
import { ApiContext } from "../../context/ApiContext";
import UpdateRecipe from "./UpdateRecipe";
const AddRecipe = () => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  const {addRecipeToList ,isLoading,changeRecipe,editRecipe} = useContext(ApiContext)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && description.trim() && image.trim()) {
      addRecipeToList({ title, description, image });

      setTitleErr(false);
      setDescriptionErr(false);
      setImageErr(false);

      setTitle("");
      setDescription("");
      setImage("");
    } else {
      !title.trim() ? setTitleErr(true) : setTitleErr(false)  ;
      !description.trim() ? setDescriptionErr(true) :setDescriptionErr(false) ;
      !image.trim() ? setImageErr(true) : setImageErr(false);
    }
  };

  return (
  <div>

<div className={styles.div}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={title}
          type="text"
          placeholder="Recipe Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        {titleErr && <p>Recipe Title cannot be empty!</p>}
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Recipe Description"
        />
        {descriptionErr && <p>Recipe Description cannot be empty!</p>}

        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="text"
          placeholder="Image URL"
        />
        {imageErr && <p>Recipe Image cannot be empty!</p>}

        <button className={styles.button} type="submit">
         {isLoading.add ?  "Loading..." : "Add Recipe" } 
        </button>
      </form>  
    </div>  
<div>
      {changeRecipe && (
              <UpdateRecipe
                editRecipe={editRecipe}
                changeRecipe={changeRecipe}
              />
            )}
      </div>
  </div>
   
  );
};

export default AddRecipe;
