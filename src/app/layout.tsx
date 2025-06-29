import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http:localhost:3000/"),
  title: {
    template: "Sonakshi | Portfolio",
    default: "Sonakshi | Portfolio",
  },
  authors: {
    name: "Sonakshi",
  },
  description: "Personal portfolio made using Next JS",
  openGraph: {
    title: "Sonakshi | Portfolio",
    description: "Personal portfolio made using Next JS",
    siteName: "Sonakshi | Portfolio",
    images: "/website.png",
    type: "website",
  },
  keywords: ["portfolio", "sonakshi", "personal porfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${spaceGrotesk.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="relative overflow-x-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
