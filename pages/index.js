import Head from 'next/head'
import Image from 'next/image'
import localFont from 'next/font/local'

const Acne = localFont({ src: '../public/fonts/Nordique-Pro-Bold.otf' })
const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })
const AcneRegular = localFont({ src: '../public/fonts/NordiquePro-Regular.otf' })

export default function Home() {
  return (
    <main className={Acne.className}>
      <h1>Goals</h1>
    </main>
  )
}
