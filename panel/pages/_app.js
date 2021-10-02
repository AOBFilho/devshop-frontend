import React from 'react'
import '../css/styles.css'

const app = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default app
