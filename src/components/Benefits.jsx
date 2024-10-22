import React from "react";
import Performance from "../assets/performance.svg";
import Optimization from "../assets/optimization.svg";
import Police from "../assets/police.svg";
import Technology from "../assets/technology.svg";
import BenefitsImage from "../assets/Benefits.png";

import Office from "../assets/Office.png";

export default function Benefits() {
  return (
    <div id="benefits" className=" bg-footerColor p-6 ">
      <div className="relative ">
        <h4 className="container mx-auto lg:text-left text-center pb-4  text-3xl lg:text-6xl font-extrabold text-white pt-5 ">
          Benefits
        </h4>
      </div>
      <div className="container  z-20 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="grid gap-6">
          <div className="flex items-center gap-6">
            <img className="w-12 sm:w-16" src={Optimization} alt="" />
            <div>
              <h4 className="text-white text-lg sm:text-2xl font-bold">
                Optimize staffing
              </h4>
              <p className="text-white pl-8 text-sm sm:text-lg">
                Allign your workforce with visitor patterns
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img className="w-12 sm:w-16" src={Performance} alt="" />
            <div>
              <h4 className="text-white text-lg sm:text-2xl font-bold">
                Enhance Customer Experience
              </h4>
              <p className="text-white pl-8 text-sm sm:text-lg">
                Tailor services based on demographic insights
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img className="w-12 sm:w-16" src={Police} alt="" />
            <div>
              <h4 className="text-white text-lg sm:text-2xl font-bold">
                Improve Security
              </h4>
              <p className="text-white pl-8 text-sm sm:text-lg">
                Monitor and manage visitor flow effectively
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img className="w-12 sm:w-16" src={Technology} alt="" />
            <div>
              <h4 className="text-white text-lg sm:text-2xl font-bold">
                Data-Driven Decision Making
              </h4>
              <p className="text-white pl-8 text-sm sm:text-lg">
                Base strategic choices on solid , AI-analyzed data
              </p>
            </div>
          </div>
        </div>
        <img
          className="max-w-2xl w-full mt-6 lg:mt-0"
          src={Office}
          alt="Office"
        />
      </div>
    </div>
  );
}
