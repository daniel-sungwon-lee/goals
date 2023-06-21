import Goal from '@/components/goal'
import localFont from 'next/font/local'

const Acne = localFont({ src: '../public/fonts/Nordique-Pro-Bold.otf' })
const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })
const AcneRegular = localFont({ src: '../public/fonts/NordiquePro-Regular.otf' })

export default function Home() {
  return (
    <main className={`container ${Acne.className}`}>
      <h1 className='logo mb-3'>Goals</h1>

      <div className='d-flex justify-content-between'>
        <Goal type={'Short term'} />
        <Goal type={'Medium term'} />
        <Goal type={'Long term'} />
      </div>
    </main>
  )
}
