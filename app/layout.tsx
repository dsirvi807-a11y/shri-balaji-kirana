import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shri Balaji Kirana | Your neighborhood grocery store",
  description: "Fresh groceries, pantry staples, and everyday essentials delivered with care.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
