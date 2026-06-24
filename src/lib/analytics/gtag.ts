import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_VERSION,
} from "@/lib/cookie-consent";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-S48PMZ3L3C";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function isGaConfigured() {
  return GA_MEASUREMENT_ID.length > 0;
}

export function buildGtagBootstrapScript() {
  return `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
(function(){
  var analyticsGranted=false;
  try{
    var stored=JSON.parse(localStorage.getItem('${COOKIE_CONSENT_STORAGE_KEY}')||'null');
    analyticsGranted=stored&&stored.version===${COOKIE_CONSENT_VERSION}&&stored.analytics===true;
  }catch(e){}
  gtag('consent','default',{
    analytics_storage:analyticsGranted?'granted':'denied',
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    wait_for_update:analyticsGranted?0:3000
  });
  if(analyticsGranted){
    gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true,send_page_view:true});
  }
})();
`.trim();
}

export function ensureGtag() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
  }
}

export function updateAnalyticsConsent(granted: boolean) {
  if (!isGaConfigured()) return;

  ensureGtag();
  window.gtag!("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });

  if (granted) {
    window.gtag!("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: true,
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

export function trackPageView(url: string) {
  if (!isGaConfigured()) return;

  ensureGtag();
  window.gtag!("event", "page_view", {
    page_path: url,
    page_location: `${window.location.origin}${url}`,
    page_title: document.title,
  });
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (!isGaConfigured()) return;

  ensureGtag();

  const cleaned = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, value]) => value !== undefined),
  );

  window.gtag!("event", eventName, cleaned);
}
