import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Goals</title>
        <meta name="description" content="A goal without a plan is just a dream; Goals helps you get closer to achieving your dreams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/goals.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
