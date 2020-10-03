import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dark Souls"]);
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return (
            //<li key={category}>{category}</li>
            <GifGrid key={category} category={category} />
          );
        })}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
