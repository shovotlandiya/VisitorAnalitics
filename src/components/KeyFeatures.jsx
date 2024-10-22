import React from "react";
import InOut from "../assets/in_out icon.svg";
import Customer from "../assets/customer-segment.svg";
import Dashboard from "../assets/dashboard.svg";
import ForeCast from "../assets/forecast (1).svg";
import KEYImage from "../assets/Key Features.png";
import TriangleSVG from "../assets/triangle.svg";

export default function KeyFeatures() {
  return (
    <div id="key" className="p-6">
      <div className="container mx-auto p-0">
        <div
          className="relative
        "
        >
          <h3 className="text-footerColor text-3xl lg:text-6xl font-extrabold mb-6">
            Key Features
          </h3>
          <img className="absolute -top-28 -z-10" src={KEYImage} alt="Image" />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-cols-2 gap-10 z-20">
          <div className="p-5 shadow-custom flex items-start gap-6">
            <img className="w-12 sm:w-20" src={InOut} alt="" />
            <div>
              <h4 className="sm:text-2xl font-bold font-bold">
                Real-Time Check-In/Check-Out Tracking
              </h4>
              <div className="grid gap-2">
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    {" "}
                    Precise timestamp recording
                  </p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    Seamless integration with existing systems
                  </p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    Customizable alerts for capacity management
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 shadow-custom flex items-start gap-6">
            <img className="w-12 sm:w-20" src={Customer} alt="" />
            <div>
              <h4 className="sm:text-2xl font-bold font-bold">
                Advanced Demographic Analysis
              </h4>
              <div className="grid gap-2">
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    {" "}
                    Gender distribution insights
                  </p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">Age group categorization</p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    Customizable demographic parameters
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 shadow-custom flex items-start gap-6">
            <img className="w-12 sm:w-20" src={ForeCast} alt="" />
            <div>
              <h4 className="sm:text-2xl font-bold font-bold">
                MAI-Powered Trend Recognition
              </h4>
              <div className="grid gap-2">
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    {" "}
                    Customizable demographic parameters
                  </p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    Recognize patterns in visitor demographics
                  </p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    Predict future visitor trends
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 shadow-custom flex items-start gap-6">
            <img className="w-12 sm:w-20" src={Dashboard} alt="" />
            <div>
              <h4 className="sm:text-2xl font-bold font-bold">
                EIntuitive Dashboard
              </h4>
              <div className="grid gap-2">
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    {" "}
                    Real-time data visualization
                  </p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    Customizable reports and analytics
                  </p>
                </div>
                <div
                  className="flex gap-4
                "
                >
                  <p className="text-sm sm:text-lg">
                    Easy-to-understand metrics for quick decision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
