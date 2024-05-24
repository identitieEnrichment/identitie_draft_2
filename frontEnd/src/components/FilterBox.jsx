import React from 'react'

const FilterBox = () => {
  return (
    <div>
         <div className=" lg:mt-4 w-full border-[.2px] border-gray-100 rounded-md" >
            {/* Filtering */}

            <div className="hidden lg:flex px-5 py-2 bg-[#273040] w-full rounded-t-md ">
              <h1 className="text-white font-semibold rounded-md">SkinCare</h1>
            </div>

            <form
              id="filterForm"
              className="drop-shadow-sm whitespace-nowrap rounded-md pb-8 mb-8 space-y-10 pr-28 pl-4 bg-transparent  text-white hidden lg:block z-10 relative"
            >
              <div className="mb-2 pt-2">
                {/* Condition */}
                <div className="text-sm font-medium py-2">CONDITION</div>
                <div className="flex flex-col text-sm space-y-4">
                  {["Like new", "Old", "Readable"].map((condition) => (
                    <div
                      key={condition}
                      className="select-none cursor-pointer space-x-2 flex items-center"
                    >
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        id={condition.toLowerCase().replace(" ", "")}
                        name="condition"
                        value={condition}
                      />
                      <label
                        className="cursor-pointer text-xs"
                        htmlFor={condition.toLowerCase().replace(" ", "")}
                      >
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                {/* Price */}
                <div className="text-sm font-medium py-2">PRICE</div>
                <div className="flex flex-col text-sm space-y-4">
                  {[
                    "0-100",
                    "100-200",
                    "200-300",
                    "300-400",
                    "400-500",
                    "500-10000",
                  ].map((range) => (
                    <div
                      key={range}
                      className="select-none cursor-pointer space-x-2 flex items-center"
                    >
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        id={range}
                        name="priceRange"
                        value={range}
                      />
                      <label className="cursor-pointer text-xs" htmlFor={range}>
                        {range === "0-100"
                          ? "Under 100"
                          : `Rs.${range.replace("-", " to Rs.")}`}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                {/* Discount */}
                <div className="text-sm font-medium py-2">DISCOUNT</div>
                <div className="flex flex-col text-sm space-y-4">
                  {["10", "30", "50", "80"].map((discount) => (
                    <div
                      key={discount}
                      className="select-none cursor-pointer space-x-2 flex items-center"
                    >
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        id={`${discount}%`}
                        name="discount"
                      />
                      <label
                        className="cursor-pointer text-xs"
                        htmlFor={`${discount}%`}
                      >
                        {discount}% and above
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
    </div>
  )
}

export default FilterBox
