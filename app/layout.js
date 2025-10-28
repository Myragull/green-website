import "./globals.css";
import { Roboto, Raleway, Poppins } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Green Template Clone",
  description: "Tailwind + Next.js version of Bootstrap Green Template",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${raleway.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
