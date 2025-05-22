import type { Metadata } from "next";
import { Karla, Montserrat } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { FilterProvider } from "@/contexts/filter-context";
import { ModalProvider } from "@/contexts/modal-context";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Front-End Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={karla.className}>
      <body className="antialiased dark bg-neutral-950">
        <Providers>
          <Navbar />
          <main className="my-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
