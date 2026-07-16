import type { Metadata } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Akshada Patil (PT) | Physiotherapy at Your Doorstep",
  description:
    "Professional, personalized physiotherapy home visits with Dr. Akshada Patil (PT), B.P.Th. Orthopaedic, neurological, sports, post-surgical, paediatric & women's health rehabilitation delivered at home. Book instantly on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${notoSans.variable}`}
    >
      <body className="min-h-screen antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
