import type { NextPage } from 'next'
import Head from 'next/head'
import UseTranslation from 'next-translate/useTranslation'
import CssBaseline from '@mui/material/CssBaseline'

import Hero from '@/components/Home/Hero'

const Home: NextPage = () => {
  const { t } = UseTranslation('home')
  return (
    <div>
      <Head>
        <title>Air Language</title>
      </Head>
      <CssBaseline />
      <Hero />
    </div>
  )
}

export default Home
