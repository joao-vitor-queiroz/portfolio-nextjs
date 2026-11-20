import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "João Vitor Queiroz | Portfólio",
    template: "%s | João Vitor Queiroz",
  },
  description:
    "Portfólio de João Vitor Queiroz, estudante de Sistemas para Internet e desenvolvedor Full Stack em formação na UNICAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
