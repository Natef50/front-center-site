import './globals.css';

export const metadata = {
  title: 'Front & Center Decor',
  description: 'Custom balloon installs, holiday decor, and photo-ready setups in Southern California'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
