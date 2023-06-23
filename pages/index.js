import GoalDialog from '@/components/dialog'
import Goals from '@/components/goals'
import localFont from 'next/font/local'
import { useEffect, useState } from 'react'

const Acne = localFont({ src: '../public/fonts/Nordique-Pro-Bold.otf' })
const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })
const AcneRegular = localFont({ src: '../public/fonts/NordiquePro-Regular.otf' })

export default function Home() {
  const [open, setOpen] = useState(false)
  const [openedType, setOpenedType] = useState('')

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('goalsData'))) {
      localStorage.setItem('goalsData', JSON.stringify([]))
    }
  })

  return (
    <main className={`container ${Acne.className}`}>
      <h1 className='logo mb-3'>Goals</h1>

      <div className='d-flex justify-content-between mb-4'>
        <Goals type={'Short term'} setOpen={setOpen} setOpenedType={setOpenedType} />
        <Goals type={'Medium term'} setOpen={setOpen} setOpenedType={setOpenedType} />
        <Goals type={'Long term'} setOpen={setOpen} setOpenedType={setOpenedType} />
      </div>

      <GoalDialog open={open} setOpen={setOpen} openedType={openedType} />
    </main>
  )
}
