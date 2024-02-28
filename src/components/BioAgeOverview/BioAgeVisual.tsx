import React from "react";

type BioAgeVisualProps = {
  chronoAge: number;
  bioAge: number;
};

export default function BioAgeVisual(BioAgeVisualProps: BioAgeVisualProps) {
  const { chronoAge, bioAge } = BioAgeVisualProps;

  return (
    <div className="bg-[#D94100] rounded-[100px] h-14 grid grid-cols-12 justify-center content-center">
      <div className="relative col-start-5 col-span-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col absolute bottom-0 justify-center items-center text-center content-center">
            <p className="text-[#7D2703] font-medium">ChronoAge</p>

            <div className="w-px h-12 bg-[#D94100]" />
          </div>

          <p className="text-center text-white text-xl font-bold leading-3">
            {chronoAge}
          </p>
        </div>
      </div>

      <div className="relative col-span-3 col-span-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col absolute bottom-0 justify-center items-center text-center content-center">
            <p className="text-[#7D2703] font-bold">BioAge</p>

            <div className="w-px h-16 bg-[#D94100]" />
          </div>

          <p className="text-center text-white text-3xl font-bold leading-3">
            {bioAge}
          </p>
        </div>
      </div>
    </div>
  );
}
