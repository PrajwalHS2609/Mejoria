import "./globals.css";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar /> {children}
        <Footer />
      </body>
    </html>
  );
}
