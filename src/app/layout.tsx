import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http:localhost:3000/"),
  title: {
    template: "Gaurav | Portfolio",
    default: "Gaurav | Portfolio",
  },
  authors: {
    name: "Gaurav",
  },
  description: "Personal portfolio made using Next JS",
  openGraph: {
    title: "Gaurav | Portfolio",
    description: "Personal portfolio made using Next JS",
    siteName: "Gaurav | Portfolio",
    images: "/website.png",
    type: "website",
  },
  keywords: ["portfolio", "gaurav", "personal porfolio"],
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
