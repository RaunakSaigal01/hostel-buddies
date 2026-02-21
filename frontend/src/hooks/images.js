// src/hooks/useImages.js
import { useEffect, useState } from "react";

export default function useImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://hostel-buddies.onrender.com/images") // adjust backend port
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const getImageUrl = (block) => {
    const match = images.find(
      (img) =>
        img.file_name.toLowerCase() === (block.letter + "OUT").toLowerCase()
    );
    return match ? match.image_url : "/placeholder.jpg";
  };

  return { images, getImageUrl };
}
