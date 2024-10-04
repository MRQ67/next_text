import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/Satoshi-Variable.woff",
  variable: "--font-satoshi-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Satoshi-Variable.woff",
  variable: "--font-satoshi-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Qadi's Portfolio",
  description: "A Sicko and a Coder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
