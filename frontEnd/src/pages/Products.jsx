import React from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { CiSearch } from "react-icons/ci";
import FilterBox from "../components/FilterBox";
const Products = () => {
  return (
    <div className="min-h-[100vh] bg-[#0d1116] w-full ">
      <Header layout={"Services"} />
      <div className="searchContainer">
        <div className="pt-24  lg:pt-32 px-2 lg:px-5 w-full  lg:flex lg:justify-between lg:items-center">
          <h1 className="text-white text-lg lg:text-2xl px-3  lg:block hidden">
            Discover Top <span className="text-[#c9be25]">SkinCare</span>{" "}
            Products at Idenitie
          </h1>
          <div className="w-full lg:w-3/12 h-fit flex space-x-1 border-[#57606a] border-[.2px] rounded-md items-center  bg-[#273040] ">
            <CiSearch className="text-[#636c76]  text-xl ml-2  " />
            <input
              className="outline-none text-white  py-2 bg-[#273040]  w-full rounded-md placeholder:text-sm "
              placeholder="Search products.."
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <h1 className="text-white text-lg lg:text-xl px-3 pt-8 lg:hidden">
        Discover Top <span className="text-[#c9be25]">SkinCare</span> Products
        at Idenitie
      </h1>
      <div className="lg:flex lg:pl-6 lg:mt-5">
        <div className="lg:block hidden">
            <FilterBox />
        </div>
        <div>
            <div className="py-4 px-2 lg:px-5 md:space-y-0  pt- space-y-4 lg:grid-cols-4 xl:grid-cols-5 md:grid md:grid-cols-4 lg:gap-y-12 lg:space-x-3">
            {" "}
            {/* contianer */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </div>
      </div>
     
    </div>
  );
};

export default Products;
