import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Goals</title>
        <meta name="title" property="og:title" content="Goals" />
        <meta name="description" property='og:description' content="A goal without a plan is just a dream; Goals helps you get closer to achieving your dreams." />
        <meta name='image' property='og:image' content='/goals.png' />
        <meta name='url' property='og:url' content='https://goalsss.netlify.app/' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/goals.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></Script>
      </body>
    </Html>
  )
}
