import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center"> Müşterilerimiz Ne Söylüyor</Title>
    <div className="flex gap-x-10">
        <CustomerItem imgSrc="/resimler/resim15.jpg"/>
       
    </div>
    </div>
  );
};

export default Customers;