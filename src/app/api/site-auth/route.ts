import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  credentialsMatch,
  getSiteAuthSessionToken,
  isSiteAuthEnabled,
  SITE_AUTH_COOKIE,
  siteAuthCookieOptions,
} from "@/lib/site-auth";

export async function POST(request: Request) {
  if (!isSiteAuthEnabled()) {
    return NextResponse.json({ ok: true });
  }

  let body: { username?: string; password?: string };

  try {
    body = (await request.json()) as { username?: string; password?: string };
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const username = body.username ?? "";
  const password = body.password ?? "";

  if (!credentialsMatch(username, password)) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  }

  const token = getSiteAuthSessionToken();
  if (!token) {
    return NextResponse.json({ error: "Site auth is not configured" }, { status: 500 });
  }

  const cookieStore = await cookies();
  cookieStore.set(SITE_AUTH_COOKIE, token, siteAuthCookieOptions);

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(SITE_AUTH_COOKIE);
  return NextResponse.json({ ok: true });
}
