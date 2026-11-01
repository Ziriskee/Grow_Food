import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Plantguide — know the plant before you plant it",
    template: "%s · Plantguide",
  },
  description:
    "A working field guide to growing food and herbs in real conditions: what each plant needs, what it gives, what goes wrong, and which neighbours help or harm it.",
};

/**
 * Applies a stored light-mode choice before first paint. Dark is the default,
 * so this only ever has to remove the default — no flash of the wrong theme
 * and no blocking request.
 */
const themeScript = `try{var t=localStorage.getItem('plantguide-theme');if(t==='light'){document.documentElement.dataset.theme='light';}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
