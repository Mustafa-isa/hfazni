import OverLay from "../../components/common/OverLay/OverLay";
import ServiceCollection from "../../components/common/NewCollection/NewCollection";
import OurCoreServices from "../../components/features/Services/OurCoreServices";
import ServicesAboutSection from "../../components/features/Services/ServicesAboutSection";

function Services() {
  return (
    <div className="mt-28">
      <OverLay title="Services" />
      <ServicesAboutSection />
      <OurCoreServices />
      <ServiceCollection />
    </div>
  );
}

export default Services;
