import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFectchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((resp) => {
      setstate({ data: resp, loading: false });
    });
  }, [category]);

  return state;
};
