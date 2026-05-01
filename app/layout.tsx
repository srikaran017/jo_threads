import Navbar from "./components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "Jo Threads",
  description: "Handcrafted bangles and earrings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
