import './globals.scss';
import { Header, Footer } from "@/app/ui";
import { Wix_Madefor_Display, Inter } from 'next/font/google'
import Head from "next/head";

// const wixMadeforDisplay = Wix_Madefor_Display({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700']
// })
const inter = Inter({
  subsets: ['latin'],
  weight: ['400']
})

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
        <Header className={inter.className}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}