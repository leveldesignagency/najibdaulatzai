import { TestimonialStars } from "@/components/testimonials/TestimonialStars";
import { testimonialsTrustBar } from "@/lib/testimonials-content";

export function TestimonialTrustBar() {
  return (
    <div className="mt-10 border border-charcoal/10 bg-charcoal px-6 py-8 text-center text-white lg:px-10 lg:py-10">
      <TestimonialStars className="justify-center" />
      <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-relaxed lg:text-xl">
        {testimonialsTrustBar}
      </p>
    </div>
  );
}
