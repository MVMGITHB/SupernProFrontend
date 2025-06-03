import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Header/Footer";
import Navbar from "@/components/Header/Navbar";
import { AuthProvider } from "@/components/context/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SuperNPro",
  description: "SuperNPro is your go-to destination for insightful and engaging blogs across finance, lifestyle, tech, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      

      <head>

        
      <meta name="robots" content="noindex, nofollow"></meta>
       <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <AuthProvider>
          <Navbar />
    

        {children}

        <Footer />
        </AuthProvider>

      </body>
    </html>
  );
}
