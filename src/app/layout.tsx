import type { Metadata } from "next";
import { Cormorant_Garamond, Spectral } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nestor Gutierrez | Backend Developer",
  description: "Professional portfolio of Nestor Gutierrez (@Nekstoreo), a backend developer specializing in ASP.NET Core, Node.js, and cloud technologies.",
  keywords: ["backend developer", "ASP.NET Core", "Node.js", "Next.js", "Docker", "PostgreSQL", "cloud computing"],
  authors: [{ name: "Nestor Gutierrez" }],
  creator: "Nestor Gutierrez",
  openGraph: {
    title: "Nestor Gutierrez | Backend Developer",
    description: "Professional portfolio of Nestor Gutierrez (@Nekstoreo), a backend developer specializing in ASP.NET Core, Node.js, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectral.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
