import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriyankFit — Personal Trainer Delhi | Fat Loss, Muscle Gain",
  description:
    "Transform your body with Delhi's top personal trainer. 500+ clients transformed. Fat loss, muscle gain & body transformation in Laxmi Nagar, East Delhi & online across India.",
  keywords:
    "personal trainer delhi, fitness trainer laxmi nagar, fat loss delhi, muscle gain delhi, body transformation delhi, online fitness coach india",
  openGraph: {
    title: "PriyankFit — Personal Trainer Delhi",
    description: "500+ clients transformed. Real results. No gimmicks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
