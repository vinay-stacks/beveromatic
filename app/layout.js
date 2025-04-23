import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Whatsapp from "@/components/Whatsapp/Whatsapp";
import VisitorCounter from "@/components/VisitorCounter/VisitorCounter";
import Script from "next/script";

export const metadata = {
  title: "Beveromatic Vending Machines",
  description: "One of the best Beveromatic 2 Lane, 3 Lane, 4 Lane Hot Beverage Vending Machine Available Here ",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <meta name="google-site-verification" content="sAP_mBFe-1gOVyAsKRigxAI2pPK8hMv571HbhtLq7Y8" />
        <Script id="tagurl" async src="https://www.googletagmanager.com/gtag/js?id=G-295P5LR5MX"></Script>
        <Script id="gtag-init">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-295P5LR5MX');`}
        </Script>

      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Whatsapp />

      </body>
    </html>
  );
}
