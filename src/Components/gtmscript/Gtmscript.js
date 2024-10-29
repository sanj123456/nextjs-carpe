"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GtmScript() {
  const pathname = usePathname();  // Get the current path

  // Track route changes and trigger GTM pageview
  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: pathname,  // Use the current path
      });
    }
  }, [pathname]);  // Re-run when the pathname changes

  // Add the GTM script once when the component is mounted
  useEffect(() => {
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5B22SNZ7');
    `;
    document.head.appendChild(gtmScript);

    return () => {
      document.head.removeChild(gtmScript);  // Clean up when the component unmounts
    };
  }, []);

  return null;  // This component doesn't need to render anything
}
