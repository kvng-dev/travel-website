import SectionHeader from "@/components/Helper/SectionHeader";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeader heading="Exploring Popular Destination" />
      {/* Add Section Content */}
      <div className="mt-14 w-[80%] mx-auto">
        <DestinationSlider />
      </div>
    </div>
  );
};
export default Destination;
