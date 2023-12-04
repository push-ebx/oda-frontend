import './globals.scss';
import Head from "next/head";

// const wixMadeforDisplay = Wix_Madefor_Display({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700']
// })


export const metadata = {
  title: 'ODA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link as="font" crossOrigin="" href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700&display=swap" rel="preload"/>
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}