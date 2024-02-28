import React from "react";
import BoxContainer from "../BoxContainer";
import { Button } from "@mui/material";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";

type LogisticStepProps = {
  title: string;
  icon: JSX.Element;
  data: string;
};

export default function LogisticStep(LogisticStepProps: LogisticStepProps) {
  const { title, icon, data } = LogisticStepProps;

  return (
    <Button>
      <BoxContainer className="flex flex-row justify-between">
        <div className="flex flex-row">
          {icon} {title}
        </div>

        <KeyboardArrowDownIcon />
      </BoxContainer>
    </Button>
  );
}
