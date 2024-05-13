import { Inter } from 'next/font/google'
import './globals.css'
import './reset.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Providers } from '@/store/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Search App',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <Providers>{children}</Providers>
        </MantineProvider>
      </body>
    </html>
  )
}
