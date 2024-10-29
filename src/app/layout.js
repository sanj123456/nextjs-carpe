
import { Inter } from "next/font/google";
import "./globals.scss";
import "./layout.scss";
import Navbar from "@/Components/Navbar/Index";
import { ReduxProvider } from "@/Redux/provider";
import InquiryModel from "@/Components/common/InquiryModel";
import { GoogleAnalytics } from '@next/third-parties/google'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";
import Whatsapp from "../Components/Whatsapp/Whatsapp";
const Footer = dynamic(() =>
  import("@/Components/Footer")
);
const WhatsappIcon = dynamic(() =>
  import("@/Components/Whatsapp/Whatsapp")
);
export const metadata = {
  title: "Used car loan | Second hand car loan | Top-up Loan in ahmedabad",
  description: "Carpecash offers used car loan, second hand car loan and top-up loan in Ahmedabad. You can check your eligibility and apply online through our simple process.",
  verification: {
    google: "TkuQgQ3e20VUrzn83fKtAtMsojsvbJIXoHMDNfYqTVc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
         <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PF6XCZKG');
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '371271628765266');
            fbq('track', 'PageView');
          `
        }} />
          <script dangerouslySetInnerHTML={{
          __html: `
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'ads_conversion_Purchase_1', {
                'event_callback': callback,
                'event_timeout': 2000,
                // <event_parameters>
              });
              return false;
            }
          `
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=371271628765266&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {/* <h1>Header</h1> */}
         <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF6XCZKG"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <ReduxProvider>
          <Navbar />
          <ToastContainer />
          <div  className="children layout-children-div">
            {children}
          </div>
          <GoogleAnalytics gaId="G-LYXP0F4QBN" />
          <Footer />
          <InquiryModel />
          <WhatsappIcon />
        </ReduxProvider>
      </body>
    </html>
  );
}
