import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// This metadata will be automatically included in the <head> of the document
export const metadata: Metadata = {
  title: "Nitish Ahuja | Full Stack Applied AI Engineer",
  description:
    "Portfolio of Nitish Ahuja - Full Stack Engineer specializing in web technologies and Applied AI.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // Add favicon here as part of the metadata
  },
  keywords: ["Nitish Ahuja", "Full Stack Engineer", "Portfolio", "Applied AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* This handles the metadata like title and favicon */}
        <meta name="author" content="Nitish Ahuja" />
        <meta
          name="keywords"
          content="Nitish Ahuja, Full Stack Engineer, Portfolio, Applied AI"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
