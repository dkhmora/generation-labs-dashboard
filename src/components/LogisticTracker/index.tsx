import BoxContainer from "../BoxContainer";
import ShipmentIcon from "../../assets/shipment.svg";
import KitRegistrationIcon from "../../assets/kit_registration.svg";
import SampleCollectionIcon from "../../assets/sample_collection.svg";
import TestKitReturnIcon from "../../assets/test_kit_return.svg";
import LabProcessingIcon from "../../assets/lab_processing.svg";
import CircleImageIcon from "../CircleImageIcon";
import LogisticStepList from "./LogisticStepList";

const LOGISTIC_STEPS = [
  {
    title: "Shipment",
    icon: <CircleImageIcon icon={ShipmentIcon} className="bg-white" />,
    data: "05/01/2024",
  },
  {
    title: "Kit registration",
    icon: <CircleImageIcon icon={KitRegistrationIcon} className="bg-white" />,
    data: "05/01/2024",
  },
  {
    title: "Sample collection",
    icon: <CircleImageIcon icon={SampleCollectionIcon} className="bg-white" />,
    data: "05/01/2024",
  },
  {
    title: "Test kit return",
    icon: <CircleImageIcon icon={TestKitReturnIcon} className="bg-white" />,
    data: "05/01/2024",
  },
  {
    title: "Lab processing & report",
    icon: <CircleImageIcon icon={LabProcessingIcon} className="bg-white" />,
    data: "05/01/2024",
  },
];

export default function LogisticTracker() {
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

          <LogisticStepList steps={LOGISTIC_STEPS} />
        </div>
      </div>
    </section>
  );
}
