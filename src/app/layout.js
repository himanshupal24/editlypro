import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Editlypro – Video Editing Agency",
  description: "we create videos that convert leads into customers and customers into fans – Editlypro is a video editing agency that specializes in creating high-quality, engaging videos for businesses of all sizes. We help you tell your story, showcase your products, and connect with your audience through the power of video. Whether you need promotional videos, social media content, or corporate videos, we have the expertise to bring your vision to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
