import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./index.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DnD spell manager",
  description: "Manage your DnD spells or create your own",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
