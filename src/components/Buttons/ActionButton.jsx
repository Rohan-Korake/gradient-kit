function ActionButton({
  icon: Icon,
  label,
  onClick,
  hoverAnimation = "",
  activeAnimation = "",
}) {
  return (
    <>
      <button
        onClick={onClick}
        className="cursor-pointer group relative inline-flex items-center gap-2 rounded-xl p-px bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 transition-all duration-300 hover:scale-[1.02]"
      >
        <span className="flex items-center gap-2 rounded-[11px] bg-[#111827] px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors group-hover:bg-[#171f2d]">
          <Icon
            size={18}
            className={`transition-transform duration-500 ${hoverAnimation} ${activeAnimation}`}
          />
          <span className="hidden sm:inline">{label}</span>
        </span>
      </button>
    </>
  );
}

export default ActionButton;
