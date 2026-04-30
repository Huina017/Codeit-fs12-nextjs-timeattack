import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Todo App",
  description: "Next.js 타임어택",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
