import './globals.css';

export const metadata = {
  title: 'RescueFi 🪂 | DeFi\'s Parachute',
  description: 'Pre-liquidation safety net. Don\'t get rekt — get rescued. Fair launch incoming.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}