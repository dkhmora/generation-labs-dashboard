import BioAgeVisual from "./BioAgeVisual";
import { IconButton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

export default function BioAgeOverview() {
  const chronoAge = 40;
  const bioAge = 43;

  return (
    <section className="w-full">
      <div className="space-y-8">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold">BioAge Overview</h2>

          <IconButton sx={{ bgcolor: "#F7F6F6" }}>
            <ChevronRight />
          </IconButton>
        </div>

        <div className="flex flex-col pt-8 space-y-4 text-center lg:flex-row lg:space-y-0 lg:space-x-2 lg:pt-12">
          <div className="flex flex-1">
            <BioAgeVisual chronoAge={40} bioAge={43} />
          </div>

          <div className="flex flex-1 justify-center items-center lg:justify-start">
            <p className="text-[#7D2703] align-bottom">
              Overall, you are{" "}
              <span className="font-bold">{bioAge - chronoAge}</span> years
              older than your chronological age
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
