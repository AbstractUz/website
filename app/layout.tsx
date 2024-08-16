import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AbstractUz Uzbekistan Open Source Team ",
  description: "AbstractUz ommaviy ochiq manba loyihasi",
  authors: [{ name: 'Shehroz Raxmatov', url: 'https://github.com/alsheroziy' }],
  icons: { icon: '/favicon.png' },
  keywords: " AbstractUz, Uzbekistan, Open Source, Team, AbstractUz Uzbekistan Open Source Team, AbstractUz Team, AbstractUz Open Source Team, AbstractUz Uzbekistan Team, AbstractUz Uzbekistan Open Source Team,  UMFT abstract, umft abstract, umftabstract, Abstract UMFT, Abstract umft, Abstract uz, AbstractUz, Abstract UZBEKISTAN, AbstractUz UZBEKISTAN, AbstractUz UZBEKISTAN Open Source Team, AbstractUz UZBEKISTAN, ABSTRACT OMMAVIY OCHIQ GITHUB TASHKILOT,",
  openGraph: {
		title: 'AbstractUz Uzbekistan Open Source Team',
		description:
		'AbstractUz ommaviy ochiq manba loyihasi, bu yerda siz ommaviy ochiq manba loyihalari haqida ma\'lumot topishingiz mumkin, shuningdek, siz o\'z loyihalaringizni qo\'shishingiz mumkin.',
		type: 'website',
		url: 'https://github.com/alsheroziy',
		locale: 'en_EN',
		images: '/logo.png',
		countryName: 'Uzbekistan',
		siteName: 'AbstractUz',
		emails: 'raxmatshehroz@gmail.com',
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
