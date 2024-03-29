"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { AuthProvider } from "./auth-context";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>{children}</AuthProvider>
            <ThemeToggle />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
