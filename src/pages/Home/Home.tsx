import HomeHero from "../../components/features/Home/HomeHero";
import HomeAboutSectiion from "../../components/features/Home/AboutHomeSction/HomeAboutSectiion";
import OurMainFocus from "../../components/common/OurMainFocus/OurMainFocus";
import ServiceCollection from "../../components/common/NewCollection/NewCollection";
import CardList from "../../components/features/Home/HfzniForAllCards";
import StatsSection from "../../components/common/Staicts/Statics";
import WhatsAppButton from "../../components/common/Whatsapp/Whatsapp";

function Home() {
  return (
    <div className=" mt-32">
      <HomeHero />
      <WhatsAppButton />
      {/* <HomeAboutSectiion /> */}
      <div className="mt-[100vh]"></div>
      <HomeAboutSectiion />
      <OurMainFocus />
      <CardList />
      <StatsSection />
      {/* <ServiceCollection /> */}
    </div>
  );
}

export default Home;
