import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

export const metadata = {
  title: "Beveromatic Vending Machines",
  description:"One of the best Beveromatic 2 Lane, 3 Lane, 4 Lane Hot Beverage Vending Machine Available Here ",
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
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
