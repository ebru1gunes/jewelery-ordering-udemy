import React from "react";
import About from "../../components/About";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import Customers from "../../components/customers/Customers";
import CategoryWrapper from "../../components/product/CategoryWrapper";
import Reservation from "../../components/Reservation";

const Index = () => {
  return (
  <React.Fragment>
    <Carousel />
    <Campaigns />
    <CategoryWrapper />
    <About />
    <Reservation />
    <Customers />
    </React.Fragment>
  );
};

export default Index;