type HeroImageCopyrightProps = {
  notice: string;
  courtesy?: string;
};

export function HeroImageCopyright({
  notice,
  courtesy = "Image courtesy of Intuitive Surgical, Inc.",
}: HeroImageCopyrightProps) {
  return (
    <>
      <p className="absolute right-2 top-[4.25rem] z-20 max-w-[4.75rem] text-right text-[0.4375rem] leading-tight text-white/50 sm:hidden">
        {notice.replace("Copyright ", "© ")}
      </p>

      <div className="absolute right-5 top-28 z-20 hidden max-w-[13rem] rounded-sm border border-white/15 bg-charcoal/80 px-3 py-2.5 backdrop-blur-sm sm:block">
        <p className="text-[0.625rem] leading-snug text-white/75">{notice}</p>
        <p className="mt-1 text-[0.625rem] leading-snug text-white/55">{courtesy}</p>
      </div>
    </>
  );
}
