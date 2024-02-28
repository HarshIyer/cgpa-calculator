import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CGPA Calculator",
  description: "Helps you predict your CGPA",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <body className="dark" style={{backgroundColor:'black'}}>{children}</body>
    </html>
  );
}
