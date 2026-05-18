import "./globals.css";

export const metadata = {
  title: "LEV TLV | Boutique Real Estate Advisory Tel Aviv",
  description:
    "Private real estate advisory in Tel Aviv. Curated properties, investments, and off-market opportunities."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
