import LogisticStep, { LogisticStepProps } from "./LogisticStep";

type LogisticStepListProps = {
  steps: LogisticStepProps[];
};

export default function LogisticStepList(
  LogisticStepListProps: LogisticStepListProps
) {
  const { steps } = LogisticStepListProps;

  return (
    <div className="flex flex-col space-y-4">
      {steps.map((step, index) => (
        <LogisticStep key={index} {...step} />
      ))}
    </div>
  );
}
