import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roast Hunter - Pay $1, Get Roasted",
  description: "Hunt for the perfect roast. Pick a topic, get destroyed by AI, share with friends. $1 per roast.",
  openGraph: {
    title: "Roast Hunter",
    description: "Hunt for the perfect roast. Pick a topic, get destroyed by AI, share with friends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950">{children}</body>
    </html>
  );
}
