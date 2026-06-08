"use client";

import { useState } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/site-config";

export function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="overflow-x-clip bg-white py-20 lg:py-28"
    >
      <SiteContainer className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal variant="fade-right">
          <div>
            <SectionHeading id="values-heading">Our Values</SectionHeading>
            <p className="mt-10 text-lg leading-relaxed text-charcoal/85 lg:text-xl">
              Our core values drive everything we do. We are committed to
              delivering precise, effective care with integrity and transparency.
              Our focus is on achieving the best outcomes through advanced
              techniques and personalised treatment plans. We work closely with
              our patients and a skilled multidisciplinary team to ensure every
              decision is informed and deliberate. Continuous improvement and
              innovation are central to our practice, ensuring we provide care of
              the highest standard.
            </p>
            <div className="mt-10">
              <Button href="/testimonials" variant="dark">
                Testimonials
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {values.map((value, index) => (
            <ScrollReveal key={value} variant="fade-left" delay={index * 90}>
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                className={`group relative w-full overflow-hidden border border-transparent bg-charcoal px-6 py-5 text-left transition-all duration-500 ${
                  activeIndex === index ? "shadow-lg shadow-charcoal/20" : ""
                }`}
              >
                <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-white transition-transform duration-500 group-hover:scale-y-100 group-focus-visible:scale-y-100" />
                <span className="relative block text-base font-medium uppercase tracking-[0.12em] text-white md:text-lg">
                  {value}
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
