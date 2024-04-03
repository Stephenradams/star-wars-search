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

  const handleSearch = (query: string) => {
    console.log(query);
  }

  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-500 max-h-fit text-gray-900">
        <main className="w-full">
          <Nav />
          <section className="p-10">
            <section className="pt-2 pb-2">
              <Search placeholder="Search" />
            </section>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
