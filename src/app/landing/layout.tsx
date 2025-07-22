export default function RootLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* <link rel="icon" type="image/png" href="./favicon.png" /> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}