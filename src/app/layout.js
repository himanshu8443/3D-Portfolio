import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Himanshu Sangwan",
  description: "Himanshu Sangwan is a full stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NRS9PX9R2K"
      ></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-NRS9PX9R2K');
        `}
      </Script>
      <SmoothScroll />
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
