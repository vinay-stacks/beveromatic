import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

export const metadata = {
  title: "Beveromatic",
  icons: {
    icon: "/favicon.ico", // Default favicon
    apple: "/apple-touch-icon.png", // Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
