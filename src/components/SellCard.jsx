import React from "react";

const SellCard = ({ iconSrc, iconAlt, title }) => {
  return (
    <div className="bg-neutral-50 rounded-xl p-2 space-y-2">
      <div className="w-fit p-1 bg-neutral-600 rounded-md overflow-hidden">
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <h3 className="font-bold text-neutral-800">{title}</h3>
      <p className="font-medium text-neutral-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
    </div>
  );
};

export default SellCard;
