import React from "react";
import ShoppingCard from "../assets/shopping-cart-checkout.svg";
import Company from "../assets/company.svg";
import Conference from "../assets/conference.svg";
import Museum from "../assets/museum.svg";
import UseImage from "../assets/Use Cases.png";

export default function UseCase() {
  return (
    <div id="cases" className="p-8  lg:p-12">
      <div className="container mx-auto py-4 ">
        <div
          className="relative
        "
        >
          <h3 className="text-footerColor text-3xl lg:text-6xl font-extrabold mb-6">
            Use Cases
          </h3>
          <img
            className="absolute -top-16  lg:-top-18 -z-10 lg:h-36"
            src={UseImage}
            alt="Image"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <div className="p-4 shadow-custom flex items-center gap-6">
            <img className="w-12 sm:w-16" src={ShoppingCard} alt="" />
            <div>
              <h4 className="text-lg sm:text-2xl font-bold">Retail</h4>
              <p className="text-sm sm:text-lg">
                Understand shopper behavior to optimize store layouts and promo
              </p>
            </div>
          </div>
          <div className="p-5 shadow-custom flex items-center gap-6">
            <img className="w-12 sm:w-16" src={Company} alt="" />
            <div>
              <h4 className="text-lg sm:text-2xl font-bold">
                Corporate Offices
              </h4>
              <p className="text-sm sm:text-lg">
                Streamline visitor management and improve security protocols
              </p>
            </div>
          </div>
          <div className="p-5 shadow-custom flex items-center gap-6">
            <img className="w-12 sm:w-16" src={Museum} alt="" />
            <div>
              <h4 className="text-lg sm:text-2xl font-bold">
                Museums & Attractions
              </h4>
              <p className="text-sm sm:text-lg">
                Manage crowd flow and exhibit popularity
              </p>
            </div>
          </div>
          <div className="p-5 shadow-custom flex items-center gap-6">
            <img className="w-12 sm:w-16" src={Conference} alt="" />
            <div>
              <h4 className="text-lg sm:text-2xl font-bold">
                Events & Conferences
              </h4>
              <p className="text-sm sm:text-lg">
                Analyze attendee demographics and engagement patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
