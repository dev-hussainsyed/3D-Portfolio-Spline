// import type React from "react"
// import type { Metadata } from "next"
// import { Inter, Poppins } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ["latin"] })
// const poppins = Poppins({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// })

// export const metadata: Metadata = {
//   title: "Software Engineer Portfolio | Web, App & AI Development",
//   description:
//     "Professional portfolio of a passionate software engineer specializing in web development, mobile applications, and AI/ML solutions. View my projects and get in touch.",
//   keywords: "software engineer, web development, mobile apps, machine learning, AI, React, Node.js, Python",
//   authors: [{ name: "Your Name" }],
//   openGraph: {
//     title: "Software Engineer Portfolio",
//     description: "Passionate Software Engineer | Web, App, AI & ML Expert",
//     type: "website",
//   },
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.className} ${poppins.variable} antialiased`}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with Tailwind, Fonts, and Theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
