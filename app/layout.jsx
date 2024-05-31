import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paradox",
  description: "Intern Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={false}>
        <div className="mx-auto">
          <NavBar />
          <main> {children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
