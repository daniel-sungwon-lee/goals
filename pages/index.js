import GoalDialog from '@/components/dialog'
import Goals from '@/components/goals'
import { Fade } from '@mui/material'
import localFont from 'next/font/local'
import { useState } from 'react'

const Acne = localFont({ src: '../public/fonts/Nordique-Pro-Bold.otf' })
const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })
const AcneRegular = localFont({ src: '../public/fonts/NordiquePro-Regular.otf' })

export default function Home() {
  const [open, setOpen] = useState(false)
  const [openedType, setOpenedType] = useState('')
  const [dataUpdated, setDataUpdated] = useState(false)

  return (
    <Fade in>
      <main className={Acne.className}>
        <div className='container'>
          <h1 className='logo mb-3'>Goals</h1>

          <div className='d-flex justify-content-between mb-4 wrap'>
            <Goals type={'Short term'} setOpen={setOpen} setOpenedType={setOpenedType}
             dataUpdated={dataUpdated} setDataUpdated={setDataUpdated} />
            <Goals type={'Medium term'} setOpen={setOpen} setOpenedType={setOpenedType}
             dataUpdated={dataUpdated} setDataUpdated={setDataUpdated} />
            <Goals type={'Long term'} setOpen={setOpen} setOpenedType={setOpenedType}
             dataUpdated={dataUpdated} setDataUpdated={setDataUpdated} />
          </div>

          <GoalDialog open={open} setOpen={setOpen} openedType={openedType}
           setOpenedType={setOpenedType} setDataUpdated={setDataUpdated} />
        </div>
      </main>
    </Fade>
  )
}
