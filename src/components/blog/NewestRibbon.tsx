/** Corner ribbon for the most recently published article on the blog index */
export function NewestRibbon() {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-10 h-[4.5rem] w-[4.5rem] overflow-hidden sm:h-20 sm:w-20"
      aria-hidden
    >
      <span className="absolute left-[-38%] top-[22%] w-[155%] -rotate-45 bg-charcoal py-1.5 text-center text-[0.625rem] font-bold uppercase tracking-[0.3em] text-white shadow-md sm:text-[0.7rem]">
        Newest
      </span>
    </div>
  );
}
