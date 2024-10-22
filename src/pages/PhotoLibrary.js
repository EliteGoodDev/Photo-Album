import React from "react";
import { useEffect, useState } from "react";
import { getAllImages } from "../utils/idb";

export default function PhotoLibrary() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImages = await getAllImages();
        setImages(allImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);
  return (
    <div className="flex">
      {images?.map((val) => {
        return <img src={val.data} alt="ima" className="w-40 h-40 mr-2"></img>;
      })}
    </div>
  );
}
