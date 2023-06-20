import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Goals</title>
        <meta name="description" content="A goal without a plan is just a dream; Goals helps you get closer to achieving your dreams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/goalsLogo.png" />
      </Head>


    </>
  )
}
