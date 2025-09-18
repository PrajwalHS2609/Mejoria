import Script from "next/script";
import LandingPage2Footer from "./../../components/LandingPage2/LandingPage2Footer";

export default function RootLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Mejoria International School of Pastry",
              image:
                "https://mejoria.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e982a611.png&w=3840&q=75",
              description:
                "Mejoria International School of Pastry in Kolkata is your gateway to mastering the art of baking and pastry. Blending traditional techniques with modern innovations, we offer a world-class learning experience for aspiring chefs and baking enthusiasts.",
              brand: {
                "@type": "Thing",
                name: "Mejoria International School of Pastry",
              },
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "Rishi",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "8365",
              },
            }),
          }}
        />
        <Script id="collect-chat" strategy="afterInteractive">
          {`
    (function(w, d) {
      w.CollectId = "688cb3d8a1413116b4a3593b";
      var h = d.head || d.getElementsByTagName("head")[0];
      var s = d.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.async = true;
      s.setAttribute("src", "https://collectcdn.com/launcher.js");
      h.appendChild(s);
    })(window, document);
  `}
        </Script>
      </head>
      <body>
        {/* <LandingNav /> */}
        {children}
        <LandingPage2Footer />
      </body>
    </html>
  );
}
