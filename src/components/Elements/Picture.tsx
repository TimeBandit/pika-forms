import React from "react";

interface PictureProps {
  src?: string;
  alt?: string;
}
const Picture = ({ src, alt }: PictureProps) => {
  return <img src={src} alt={alt || "an image"} />;
};

export default Picture;
