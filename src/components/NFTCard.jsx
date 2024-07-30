import React from "react";

const NFTCard = ({ iconSrc, iconAlt, title }) => {
  return (
    <div className="border border-neutral-50 rounded-xl p-2 w-fit space-y-2">
      <img
        src={iconSrc}
        alt={iconAlt}
        className="tv-ratio rounded-lg min-w-56 object-cover"
      />
      <div className="flex justify-between items-center w-full font-bold">
        <span>{title}</span>
        <span className="inline-flex gap-1">
          <img src="/assets/ethereum.png" alt="Ethereum" /> 68
        </span>
      </div>
      <button className="w-full py-2 rounded-lg border border-neutral-800">
        Place a Bid
      </button>
    </div>
  );
};

export default NFTCard;
