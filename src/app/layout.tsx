"use client";
import "./globals.css";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";
import Whatsapp from "./../components/Whatsapp/Whatsapp";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingNav from './../components/LandingPage/LandingNav/LandingNav';
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();
  const isLanding = pathname.startsWith("/lp-baking-courses");
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </head>
      <body>
        {isLanding ? <LandingNav /> : <NavBar />}
        {children}
        {!isLanding && <Footer />}
        {!isLanding && <Whatsapp />}
      </body>
    </html>
  );
}
