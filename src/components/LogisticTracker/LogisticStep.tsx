import BoxContainer from "../BoxContainer";
import { Button } from "@mui/material";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";

export type LogisticStepProps = {
  title: string;
  icon: JSX.Element;
  data?: string;
};

export default function LogisticStep(LogisticStepProps: LogisticStepProps) {
  const { title, icon } = LogisticStepProps;

  return (
    <Button
      className="w-full"
      sx={{ padding: 0, borderRadius: "0.75rem", color: "#938562" }}
    >
      <BoxContainer className="flex flex-row w-full justify-between content-center items-center">
        <div className="flex flex-row items-center space-x-7">
          <span>{icon}</span>

          <p className="normal-case text-black text-lg font-bold">{title}</p>
        </div>

        <KeyboardArrowDownIcon sx={{ color: "#000" }} />
      </BoxContainer>
    </Button>
  );
}
