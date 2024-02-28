import React from "react";

type BioAgeVisualProps = {
  chronoAge: number;
  bioAge: number;
};

export default function BioAgeVisual(BioAgeVisualProps: BioAgeVisualProps) {
  const { chronoAge, bioAge } = BioAgeVisualProps;

  return (
    <div className="bg-[#D94100] rounded-[100px] h-14 grid grid-cols-12 justify-center content-center">
      <div className="col-start-5 col-span-4">
        <p className="text-center text-white text-xl font-bold leading-3">
          {chronoAge}
        </p>
      </div>

      <div className="col-span-3 col-span-4">
        <p className="text-center text-white text-3xl font-bold leading-3">
          {bioAge}
        </p>
      </div>
    </div>
  );
}
