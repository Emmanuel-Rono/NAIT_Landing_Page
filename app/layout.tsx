import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAIT — Network of Adventists in Technology",
  description:
    "The Network of Adventists in Technology (NAIT) is an initiative aimed at creating a vibrant community of Adventist professionals, students, and enthusiasts in the technology space.",
  openGraph: {
    title: "NAIT — Network of Adventists in Technology",
    description:
      "Adventists in technology can build members' capacities, collaborate on projects, organize annual summits, and leverage their God-given skills.",
    images: ["https://naitcommunity.vercel.app/nait-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
