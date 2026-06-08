"use client";

import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";
import type { RoboticSurgeryVideoConfig } from "@/lib/robotic-surgery-content";

type RoboticSurgeryVideoProps = {
  video: RoboticSurgeryVideoConfig;
  className?: string;
};

export function RoboticSurgeryVideo({ video, className = "" }: RoboticSurgeryVideoProps) {
  const { functionalAllowed, openPreferences } = useCookieConsent();
  const hasYoutube = Boolean(video.youtubeId?.trim());
  const hasFile = Boolean(video.fileSrc?.trim());
  const isConfigured = hasYoutube || hasFile;

  return (
    <section
      className={`${className}`.trim()}
      aria-labelledby="robotic-surgery-video-heading"
    >
      <h2
        id="robotic-surgery-video-heading"
        className="border-l-[3px] border-charcoal pl-4 text-2xl font-semibold tracking-tight text-charcoal lg:pl-5 lg:text-3xl"
      >
        {video.heading}
      </h2>
      {video.caption ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80 lg:text-lg">
          {video.caption}
        </p>
      ) : null}

      <div className="mx-auto mt-8 max-w-2xl overflow-hidden border border-charcoal/10 bg-neutral-100 shadow-sm lg:max-w-3xl">
        {!isConfigured ? (
          <div
            className="relative flex aspect-video items-center justify-center bg-charcoal/5 p-8 text-left"
            style={
              video.posterSrc
                ? {
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${video.posterSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          >
            <p className="max-w-lg text-sm leading-relaxed text-charcoal/75 lg:text-base">
              Video overview coming soon. Please share your YouTube or Vimeo link, or an MP4
              file, to complete this section.
            </p>
          </div>
        ) : hasFile ? (
          <figure>
            <video
              className="aspect-video w-full bg-charcoal"
              controls
              playsInline
              preload="metadata"
              poster={video.posterSrc}
              title={video.heading}
            >
              <source src={video.fileSrc} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            {video.copyrightNotice ? (
              <figcaption className="border-t border-charcoal/10 bg-white px-4 py-3 text-xs leading-relaxed text-charcoal/60 sm:px-5">
                {video.copyrightNotice}
                <span className="mt-1 block text-charcoal/50">
                  Video courtesy of Intuitive Surgical, Inc. Used under Intuitive
                  press resource terms.
                </span>
              </figcaption>
            ) : null}
          </figure>
        ) : hasYoutube && functionalAllowed ? (
          <div className="relative aspect-video w-full">
            <iframe
              title={video.heading}
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        ) : (
          <div className="flex aspect-video flex-col items-start justify-center gap-4 p-8 text-left">
            <p className="max-w-lg text-sm leading-relaxed text-charcoal/80 lg:text-base">
              This video uses functional cookies from YouTube. Enable functional cookies to
              watch here, or open the video on YouTube.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={openPreferences}
                className="bg-charcoal px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white hover:bg-charcoal-dark"
              >
                Cookie settings
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-charcoal/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal hover:border-charcoal/50"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
