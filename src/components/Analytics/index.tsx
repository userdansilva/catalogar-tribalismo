/* eslint-disable react/no-danger */
import { Fragment } from "react";
import Script from "next/script";

export function Analytics() {
  return (
    <>
      {/* Google  */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-F95ZEV65MK" strategy="lazyOnload" />
      <Script strategy="lazyOnload" id="google-tags">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-F95ZEV65MK');
      `}
      </Script>

      {/* Facebook */}
      <Script strategy="lazyOnload" id="fc-pixel-tags">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '817624483111898');
        fbq('track', 'PageView');
      `}
      </Script>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=817624483111898&ev=PageView&noscript=1"
          />`,
        }}
      />
    </>
  );
}
