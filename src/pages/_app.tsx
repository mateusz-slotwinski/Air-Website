import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/layout/material-ui/theme'

import Layout from '@/layout/Default'
import store from '@/store'

// import '@mslotwinski/mango-ui'
import '@/styles/index.scss'

function AirWebsite({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default AirWebsite
