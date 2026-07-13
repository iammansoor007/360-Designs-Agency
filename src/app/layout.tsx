import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import content from "@/data/content.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lora.variable} ${poppins.variable} h-full antialiased scroll-smooth dark`}
    >
      <head>
        {/* THEME TOGGLE DISABLED — site locked to dark mode
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        */}
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#080710] text-black dark:text-white font-sans overflow-x-hidden relative transition-colors duration-300">
        <InteractiveBackground />
        <div className="relative z-10 flex flex-col min-h-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
