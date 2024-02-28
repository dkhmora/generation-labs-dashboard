import React from "react";
import BioAgeVisual from "./BioAgeVisual";

export default function index() {
  return (
    <section className="w-full">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">BioAge Overview</h2>

        <div className="pt-8">
          <BioAgeVisual chronoAge={40} bioAge={43} />
        </div>
      </div>
    </section>
  );
}
