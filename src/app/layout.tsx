import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PAK",
  description: "PAK - Sverige bästa spårningstjänst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col container mx-auto`}>
        <Header />
        <main className="flex flex-col grow p-6 justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
