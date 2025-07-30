import { Lora, Poppins, Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/navbar/Navbar";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Tourism Experiences Landing Page",
  description: "Tourism Experiences Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} antialiased`}>
        <header className="fixed left-0 right-0 top-0 z-50">
          <Navbar />
        </header>
        <main className="font-poppins">{children}</main>
      </body>
    </html>
  );
}
