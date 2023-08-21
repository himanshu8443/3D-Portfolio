import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Himanshu Sangwan',
  description: 'Himanshu Sangwan is a full stack developer.', 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        {children}
        </body>
    </html>
  )
}
