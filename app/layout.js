import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// === Load Fonts ===
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ensures fast font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// === Metadata ===
export const metadata = {
  title: "Mani Sarmi",
  description: "Responsive Tailwind Navbar with Clear Text Rendering",
};

// === Root Layout ===
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          subpixel-antialiased
          font-sans 
          text-gray-800
          bg-gray-50
          min-h-screen
        `}
        style={{
          WebkitFontSmoothing: "auto",
          MozOsxFontSmoothing: "auto",
          textRendering: "optimizeLegibility",
          fontWeight: 500,
        }}
      >
        {children}
      </body>
    </html>
  );
}
