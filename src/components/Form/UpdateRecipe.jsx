import { useContext, useEffect, useState } from "react";
import React from "react";
import styles from "./Update.module.css";
import { ApiContext } from "../../context/ApiContext";


const UpdateRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const {editRecipe, changeRecipe} = useContext(ApiContext);

  useEffect(() => {
    setTitle(changeRecipe.title);
    setDescription(changeRecipe.description);
    setImage(changeRecipe.image);
  }, [changeRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    setImage("");
    editRecipe(changeRecipe.id, { title, description, image });
  };

  return (
    <div className={styles.update}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={title}
          type="text"
          placeholder="Recipe Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          value={description}
          placeholder="Recipe Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          value={image}
          type="text"
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <div className={styles.buttons}>
          <button type="submit">Update </button>
          <button className={styles.cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRecipe;
