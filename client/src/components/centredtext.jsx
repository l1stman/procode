import React from "react";

const CenteredText = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-1/2 h-64 flex flex-col items-center justify-center">
        <p className="text-first font-bold text-3xl">
          Create Your Own Promo Code with
        </p>
        <p className="text-first font-bold text-6xl" id="bigT">
          <span className="text-second" id="bigT">
            P
          </span>
          ro
          <span className="text-second" id="bigT">
            C
          </span>
          ode
        </p>
      </div>
    </div>
  );
};

export default CenteredText;
