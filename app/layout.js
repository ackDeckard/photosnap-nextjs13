import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { DeviceProvider } from "./lib/store/device-context";

export const metadata = {
  title: "Photosnap App",
  description: "Using Next JS, Tailwind, React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DeviceProvider>
          <Header />
          {children}
          <Footer />
        </DeviceProvider>
      </body>
    </html>
  );
}
