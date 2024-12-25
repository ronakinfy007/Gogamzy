"use client";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "./_header/page";
import Footer from "./_footer/page";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning>
      <head></head>
      <body
        className={`${inter.className} flex w-full max-w-[1540px] mx-auto min-h-dvh overflow-auto `}
        suppressHydrationWarning={true}
      >
        <GoogleAnalytics gaId="G-Y2FCGQGZ8S" />
        <div className="flex flex-col w-full px-3 sm:px-5">
          <Header />
          <div className="flex flex-col w-full flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
