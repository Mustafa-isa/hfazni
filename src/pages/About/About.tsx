import OverLay from "../../components/common/OverLay/OverLay";
import AboutUsSection from "../../components/features/About/AboutUsSection";
import OurMainFocus from "../../components/common/OurMainFocus/OurMainFocus";
import ServiceCollection from "../../components/common/NewCollection/NewCollection";

function About() {
  return (
    <div className="mt-28">
      <OverLay title="About" />

      <AboutUsSection />
      <OurMainFocus /> 
      <ServiceCollection />
    </div>
  );
}

export default About;
