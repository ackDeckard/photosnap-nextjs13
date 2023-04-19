import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { DeviceProvider } from "./lib/store/device-context";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: "Photosnap App",
  description: "Using Next JS, Tailwind, React",
};

const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmsans.className}`}>
        <DeviceProvider>
          <Header />
          {children}
          <Footer />
        </DeviceProvider>
      </body>
    </html>
  );
}
