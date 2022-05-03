import Script from 'next/script'
import { Fragment } from 'react'

export const Analytics = () => (
  <Fragment>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-WNXGH9QP18" strategy="lazyOnload" />
    <Script strategy="lazyOnload" id="google-tags">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WNXGH9QP18');
        gtag('config', 'UA-124606827-3');
      `}
    </Script>

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
        fbq('init', '165638437257579');
        fbq('track', 'PageView');
      `}
    </Script>

    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=165638437257579&ev=PageView&noscript=1"
      />`
      }}
    />

    <Script
      src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/7265390e-d6cb-481b-8148-9f158b48455d-loader.js"
      strategy="lazyOnload"
    />
  </Fragment>
)
