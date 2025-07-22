"use client";
import "./globals.css";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";
import Whatsapp from "./../components/Whatsapp/Whatsapp";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
