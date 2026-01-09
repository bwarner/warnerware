import type { Metadata } from "next";
import cn from "clsx";
import Script from "next/script";
import { ptSerif, montserrat } from "./fonts";
import "./globals.css";
import { CSPostHogProvider } from "./providers";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: {
    default: "WarnerWare",
    template: "%s | WarnerWare",
  },
  description:
    "Byron Warner - Software engineer based in San Francisco. Writing about software development, tools, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${process.env.NEXT_PUBLIC_POSTHOG_KEY}',{
              api_host:'${process.env.NEXT_PUBLIC_POSTHOG_HOST}',
              person_profiles: 'identified_only',
              capture_exceptions: true,
              capture_performance: true
            })
          `}
        </Script>
        <Script id="posthog-page" strategy="afterInteractive">
          {`
            posthog.capture('pageview')
          `}
        </Script>
      </head>
      <body
        className={cn(
          ptSerif.variable,
          montserrat.variable,
          "font-serif",
          "text-gray-600",
          "min-h-screen",
          "flex",
          "flex-col",
        )}
      >
        <CSPostHogProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CSPostHogProvider>
      </body>
    </html>
  );
}
