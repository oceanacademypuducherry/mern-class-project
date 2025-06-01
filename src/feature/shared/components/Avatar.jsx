import React from "react";

const Avatar = ({ src, alt }) => {
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
