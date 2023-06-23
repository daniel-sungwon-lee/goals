import { AddRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Fab, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import dayjs from "dayjs";

const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })

export default function Goals ({ type, setOpen, setOpenedType }) {
  const [list, setList] = useState([])

  useEffect(() => {
    const goalsData = JSON.parse(localStorage.getItem('goalsData'))
    setList(goalsData)
  })

  return (
    <>
      <Paper className='paper' elevation={3}>
        <h1 className="my-3">{type}</h1>

        <>
          {
            list.map(g => {
              const { goal, goalCategory, goalDate, goalType } = g

              if(goalType === type) {

                return (
                  <>
                    <Card key={goal} className="mx-4 mb-3" sx={{background: '#ECB6AC'}}>
                      <CardContent sx={{textAlign: 'left'}}>
                        <Box sx={{textTransform: 'capitalize', color: 'white'}}>
                          {goalCategory}
                        </Box>
                        <Box className='h4'>{goal}</Box>
                        <Box>{dayjs(goalDate).format('MMMM, DD YYYY')}</Box>
                      </CardContent>

                      <CardActions>
                        <Button color="secondary" sx={{color: 'white'}}>Plan</Button>
                      </CardActions>
                    </Card>
                  </>
                )
              }
            })
          }
        </>

        <Box className="d-flex flex-column justify-content-center align-items-center mt-4"
         sx={list.length > 0 ? {} : {minHeight: '75%'}}>
          <Fab color="secondary" variant="extended" className={AcneSemi.className}
           sx={{textTransform: 'none', color: 'white', fontSize: '20px'}} onClick={() => {
            setOpen(true)
            setOpenedType(type)
           }}>
            <AddRounded />
            Add goal
          </Fab>
        </Box>
      </Paper>
    </>
  )
}
