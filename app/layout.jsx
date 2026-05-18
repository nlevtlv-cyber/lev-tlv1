import "./globals.css";

export const metadata = {
  title: "LEV TLV | Boutique Real Estate Advisory Tel Aviv",
  description: "Boutique real estate advisory in Tel Aviv."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
