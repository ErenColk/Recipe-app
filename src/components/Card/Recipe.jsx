import React, { useState } from "react";
import styles from "./Recipe.module.css";

const Recipe = ({
  id,
  title,
  description,
  image,
  deleteRecipe,
  isLoading,
  startEditing,
}) => {
  //BURAYI YAP
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);

  return (
    <div className={styles.card}>
      <img src={image} alt="Resim 1" />
      <p>
        <b>{title}</b>
      </p>
      <p>{description}</p>

      <div className={styles.buttons}>
        <button
          className={styles.update}
          onClick={() => startEditing({ id, title, description, image })}
        >
          Güncelle
        </button>
        <button className={styles.delete} onClick={ async () =>{
           setIsDeletedLoading(true)
           await deleteRecipe(id) 
           setIsDeletedLoading(false)
        
        }}>
          {isDeletedLoading ?   "Loading..." : "Delete" }
        </button>
      </div>
    </div>
  );
};

export default Recipe;
