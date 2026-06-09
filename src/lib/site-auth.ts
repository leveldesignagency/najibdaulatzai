export const SITE_AUTH_COOKIE = "nd-site-auth";

export function isSiteAuthEnabled() {
  return process.env.SITE_AUTH_ENABLED === "true";
}

export function getSiteAuthSessionToken() {
  return process.env.SITE_AUTH_SESSION_TOKEN ?? "";
}

export function getSiteAuthCredentials() {
  return {
    username: process.env.SITE_AUTH_USERNAME ?? "",
    password: process.env.SITE_AUTH_PASSWORD ?? "",
  };
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;

  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return mismatch === 0;
}

export function credentialsMatch(username: string, password: string) {
  const expected = getSiteAuthCredentials();

  if (!expected.username || !expected.password) {
    return false;
  }

  return (
    timingSafeEqual(username.trim(), expected.username) &&
    timingSafeEqual(password, expected.password)
  );
}

export function isValidSessionCookie(value: string | undefined) {
  if (!isSiteAuthEnabled()) return true;

  const token = getSiteAuthSessionToken();
  if (!token || !value) return false;

  return timingSafeEqual(value, token);
}

export const siteAuthCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
};
