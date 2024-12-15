import SectionHeader from "@/components/Helper/SectionHeader";
import ChooseCard from "./ChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      <SectionHeader heading="Why Choose Us" />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <ChooseCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ChooseCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;
