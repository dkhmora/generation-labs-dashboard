import React from "react";
import BoxContainer from "../BoxContainer";

export default function index() {
  return (
    <section className="w-full">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Logistic tracker</h2>

        <div className="space-y-4">
          <BoxContainer className="px-8">
            <p className="text-center">
              Your next test is scheduled for shipment on 05/01/2024. Now is the
              best time to follow your action plan!
            </p>
          </BoxContainer>

          <p className="font-light">Upcoming on 05/01/2024</p>
        </div>
      </div>
    </section>
  );
}
