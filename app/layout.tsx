import type { Metadata } from "next";
import { Onest, Manrope } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital SU — Маркетинг, который работает на результат",
  description:
    "Digital SU создаёт стратегии, запускает рекламу и строит цифровой рост для вашего бизнеса.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
