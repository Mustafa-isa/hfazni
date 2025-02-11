import React from "react";
import OverLay from "../../components/common/OverLay/OverLay";
import PortfolioHousess from "../../components/features/Portfolio/PortfolioHousess";

function Portfolio() {
  return <div className="mt-28"> 
  <OverLay title="Portfolio" /> 
  <PortfolioHousess />
  </div>;
}

export default Portfolio;
