"use client";
import "./globals.css";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";
import Whatsapp from "./../components/Whatsapp/Whatsapp";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingNav from "./../components/LandingPage/LandingNav/LandingNav";
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
        <meta
          name="google-site-verification"
          content="yqazowW1Swnwl1LWG2t7_I8_YTkEVuw9gNN93Akozrc"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RXC0MQ7ZX8"
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RXC0MQ7ZX8');
`}
        </script>
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
