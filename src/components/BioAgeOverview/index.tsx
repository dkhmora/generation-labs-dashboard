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

        <div className="pt-8 space-y-4 text-center">
          <BioAgeVisual chronoAge={40} bioAge={43} />

          <p className="text-[#7D2703]">
            Overall, you are{" "}
            <span className="font-bold">{bioAge - chronoAge}</span> years older
            than your chronological age
          </p>
        </div>
      </div>
    </section>
  );
}
