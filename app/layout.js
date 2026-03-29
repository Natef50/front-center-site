export const metadata = {
  title: "Front & Center Decor",
  description: "Custom decor installations"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
