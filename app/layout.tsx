import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Search from "./ui/search";
import Nav from "./ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Search",
  description: "A search engine for Star Wars characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-100 max-h-fit text-gray-900">
        <main className="w-full">
          <Nav />
          <section className="p-10">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
