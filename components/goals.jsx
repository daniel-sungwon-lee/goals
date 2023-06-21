import { AddRounded } from "@mui/icons-material";
import { Box, Fab, Paper } from "@mui/material";
import { useState } from "react";
import localFont from 'next/font/local'

const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })

export default function Goals ({type}) {
  const [list, setList] = useState([])

  return (
    <>
      <Paper className='paper' elevation={3}>
        <h1 className="my-3">{type}</h1>

        <>
          {
            list.map(goal => {

              return (
                <></>
              )
            })
          }
        </>

        <Box className="d-flex flex-column justify-content-center align-items-center"
         sx={list.length > 0 ? {} : {minHeight: '75%'}}>
          <Fab color="secondary" variant="extended" className={AcneSemi.className}
           sx={{textTransform: 'none', color: 'white', fontSize: '20px'}} onClick={() => {
            console.log(type)
           }}>
            <AddRounded />
            Add goal
          </Fab>
        </Box>
      </Paper>
    </>
  )
}
