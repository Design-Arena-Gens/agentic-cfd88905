export const metadata = {
  title: 'NaijaNet Cyber Cafe | Fast Internet, Gaming, Printing in Lagos',
  description:
    'NaijaNet Cyber Cafe in Lagos, Nigeria. Fast fibre internet, gaming zone, printing & scanning, JAMB/WAEC registration, CV typing, photo & passport prints. Affordable rates.',
  openGraph: {
    title: 'NaijaNet Cyber Cafe',
    description:
      'Fast fibre internet, gaming zone, printing & more in Lagos, Nigeria.',
    url: 'https://agentic-cfd88905.vercel.app',
    siteName: 'NaijaNet Cyber Cafe',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NaijaNet Cyber Cafe',
    description: 'Fast internet, gaming, printing & more in Lagos',
  },
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
