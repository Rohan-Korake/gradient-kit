import { useState } from "react";
import GradientTypeButton from "../Buttons/GradientTypeButton";
import useGradientStore from "../Store/gradientStore";

function GradientType() {
  // handle the active state
  const { activeType, setActiveType } = useGradientStore();

  return (
    <div className="w-full rounded-xl bg-[#12192B] p-4 sm:p-6 ">
      <div className="mb-1 flex flex-col items-start justify-between gap-4">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Gradient Type
        </h2>
        <div className="flex w-full justify-start items-center flex-wrap gap-2 lg:gap-4">
          <GradientTypeButton
            activeType={activeType}
            setActiveType={setActiveType}
          />
        </div>
      </div>
    </div>
  );
}

export default GradientType;
