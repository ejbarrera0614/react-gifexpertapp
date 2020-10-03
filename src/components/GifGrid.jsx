import React from "react";
import GifGridItem from "./GifGridItem";
import { useFectchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFectchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <p className="animate__animated animate__flash">Cargando</p>
      ) : (
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
