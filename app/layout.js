import { Geist, Geist_Mono,Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather=Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],  
    subsets: ["latin"],
})

export const metadata = {
  title: "Livewell",
  description: "Build a Healthy Lifestyle That Lasts",
  icons: {
    icon: '/favicon.png' // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
