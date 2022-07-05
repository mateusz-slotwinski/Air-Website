import type { NextPage } from 'next'
import UseTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

const Start: NextPage = () => {
  const { t } = UseTranslation('home')
  return (
    <div>
      <div></div>
    </div>
  )
}

export default Start
