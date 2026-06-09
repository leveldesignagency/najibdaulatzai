"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

export function SiteLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextPath = searchParams.get("next") || "/";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/site-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setError("Incorrect username or password. Please try again.");
        return;
      }

      router.replace(nextPath.startsWith("/") ? nextPath : "/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4 py-16">
      <div className="w-full max-w-md border border-charcoal/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex justify-center">
          <Image
            src="/Logos/Najib_Daulatzai_Logo.svg"
            alt="Najib Daulatzai"
            width={220}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </div>

        <h1 className="mt-8 text-center text-2xl font-semibold tracking-tight text-charcoal">
          Private preview
        </h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-charcoal/70 sm:text-base">
          This website is not yet public. Enter the username and password provided
          by the practice to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="site-login-username" className="block text-sm font-medium text-charcoal">
              Username
            </label>
            <input
              id="site-login-username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full border border-charcoal/15 px-4 py-3 text-base text-charcoal outline-none focus:border-charcoal/35 focus:ring-2 focus:ring-charcoal/15"
              required
            />
          </div>

          <div>
            <label htmlFor="site-login-password" className="block text-sm font-medium text-charcoal">
              Password
            </label>
            <input
              id="site-login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full border border-charcoal/15 px-4 py-3 text-base text-charcoal outline-none focus:border-charcoal/35 focus:ring-2 focus:ring-charcoal/15"
              required
            />
          </div>

          {error ? (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-charcoal px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-charcoal-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Enter site"}
          </button>
        </form>
      </div>
    </div>
  );
}
