import { useState } from "react";
import StandardAngleButton from "../Buttons/StandardAngleButton";
import useGradientStore from "../Store/gradientStore";

function GradientAngle() {
  const { angle, setAngle } = useGradientStore();

  return (
    <>
      <div className="w-full rounded-xl bg-[#12192B] p-4 sm:p-6 flex flex-col gap-3 ">
        <div className="mb-1 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Gradient Angle
          </h2>
          <div className="max-w-[6ch] flex items-center justify-center gap-2 w-full sm:w-auto p-2 m-1 sm:px-6 border border-[#2B3246] rounded-lg cursor-pointer transition-all duration-200">
            <div>{angle}°</div>
          </div>
        </div>

        {/* show range bar to set angle  */}
        <div>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="slider w-full"
            style={{
              background: `linear-gradient(to right,
            #6D5EF7 0%,
            #6D5EF7 ${(angle / 360) * 100}%,
            #2B3246 ${(angle / 360) * 100}%,
            #2B3246 100%)`,
            }}
          />

          {/* show standard angles  */}
          <div className="mt-4 flex w-full sm:justify-start lg:justify-between items-center flex-wrap gap-1 lg:gap-2">
            <StandardAngleButton
              activeAngle={angle}
              setActiveAngle={setAngle}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GradientAngle;
