import { RotateCcw } from "lucide-react";
import ActionButton from "./Buttons/ActionButton";
import useGradientStore from "./Store/gradientStore";
import logo from "../assets/logo.svg";

function Header() {
  const { resetGradient } = useGradientStore();

  return (
    <header className="w-full border-b border-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        {/* Logo + Brand */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <img src={logo} alt="logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            GradientKit
          </span>
        </div>

        <ActionButton
          icon={RotateCcw}
          label={"Reset All"}
          onClick={resetGradient}
          hoverAnimation="group-hover:-rotate-180"
          activeAnimation="group-active:-rotate-180"
        />
      </div>
    </header>
  );
}

export default Header;
