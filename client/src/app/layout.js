import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://ericksonplaza.com"),
  title: "EricksonPlaza - Online Store",
  description: "Zimbabwe's greatest online store for all range of products",
  openGraph: {
    title: "EricksonPlaza - Online Store",
    description: "BZimbabwe's greatest online store for all range of products",
    url: "https://ericksonplaza.com",
    siteName: "Erickon Plaza",
    images: "https://ericksonplaza.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@404_y",
    title: "Erickson Plaza",
    description: "Zimbabwe's greatest online store for all range of products",
    image: "https://ericksonplaza.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Auth>{children}</Auth>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
