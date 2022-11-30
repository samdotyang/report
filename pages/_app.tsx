import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider } from 'react-bootstrap'
import { DashboardLayout } from '@components/Layout'
import { ThemeContextProvider } from '@components/Theme'

export default function App({ Component, pageProps }: AppProps) {
  // In server-side rendered applications, a SSRProvider must wrap the application in order
  // to ensure that the auto-generated ids are consistent between the server and client.
  // https://react-bootstrap.github.io/getting-started/server-side-rendering/
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
  <SSRProvider>
    <ThemeContextProvider>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeContextProvider>
  </SSRProvider>
  )
}
