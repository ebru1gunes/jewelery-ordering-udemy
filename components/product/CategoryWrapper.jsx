import React from "react";
import Title from "../ui/Title";
import CategoryItem from "./CategoryItem";

const CategoryWrapper = () => {
  return  (
  <div className="container mx-auto mb-16">
    <div className="flex flex-col items-center  w-full">
    <Title addClass="text-[40px]">Our Category</Title>
    <div className="mt-10">
        <button className="px-6 py-2 bg-secondary rounded-3xl text-white">Tümü</button>
        <button className="px-6 py-2  rounded-3xl">Kolye</button>
        <button className="px-6 py-2  rounded-3xl">Bileklik</button>
        <button className="px-6 py-2  rounded-3xl ">Küpe</button>
        <button className="px-6 py-2  rounded-3xl ">Yüzük</button>


    </div>
    </div>
     <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-4">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
    </div>
  </div>
  );
};

export default CategoryWrapper;

