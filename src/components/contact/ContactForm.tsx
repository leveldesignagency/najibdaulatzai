"use client";

export function ContactForm() {
  return (
    <div className="mt-16 border-t border-charcoal/10 pt-16">
      <h2 className="text-3xl font-medium text-charcoal">Contact us</h2>
      <form
        className="mt-8 grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-charcoal/80">
            First name
            <input
              type="text"
              name="firstName"
              autoComplete="given-name"
              className="border border-charcoal/20 bg-white px-4 py-3 text-base text-charcoal outline-none transition-colors focus:border-charcoal"
            />
          </label>
          <label className="grid gap-2 text-sm text-charcoal/80">
            Last name
            <input
              type="text"
              name="lastName"
              autoComplete="family-name"
              className="border border-charcoal/20 bg-white px-4 py-3 text-base text-charcoal outline-none transition-colors focus:border-charcoal"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm text-charcoal/80">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="border border-charcoal/20 bg-white px-4 py-3 text-base text-charcoal outline-none transition-colors focus:border-charcoal"
          />
        </label>
        <label className="grid gap-2 text-sm text-charcoal/80">
          Message
          <textarea
            name="message"
            rows={5}
            className="resize-y border border-charcoal/20 bg-white px-4 py-3 text-base text-charcoal outline-none transition-colors focus:border-charcoal"
          />
        </label>
        <div>
          <button
            type="submit"
            className="inline-flex min-h-[48px] items-center justify-center border border-charcoal bg-charcoal px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-charcoal/90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
