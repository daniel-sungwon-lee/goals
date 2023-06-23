import { AddRounded, DeleteRounded, ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Collapse, Fab, Fade,
         IconButton, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import dayjs from "dayjs";
import Plan from "./plan";

const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })

export default function Goals ({ type, setOpen, setOpenedType, dataUpdated, setDataUpdated }) {
  const [list, setList] = useState([])
  const [show, setShow] = useState(null)

  useEffect(() => {
    const goalsData = JSON.parse(localStorage.getItem('goalsData'))
    setList(goalsData)

    if(dataUpdated) {
      setDataUpdated(false)
    }
  },[setList, dataUpdated, setDataUpdated])

  const handleDelete = (id) => {
    const index = list.findIndex(g => g.id === id)
    const updatedList = list.toSpliced(index, 1)
    setList(updatedList)

    localStorage.setItem('goalsData', JSON.stringify(updatedList))
  }

  return (
    <>
      <Paper className='paper' sx={list.filter(g => g.type === type).length > 0 ? {height: 'fit-content'} : {}}
       elevation={3}>
        <h1 className="my-3">{type}</h1>

        <div>
          {
            list.map(g => {
              const { id, goal, category, date, type:goalType } = g

              if(goalType === type) {
                return (
                  <Fade key={id} in>
                    <Card className="mx-4 mb-3" sx={{background: '#ECB6AC'}}>
                      <CardContent sx={{textAlign: 'left'}}>
                        <Box sx={{textTransform: 'capitalize', color: 'white'}}>
                          {category}
                        </Box>
                        <Box className='h4'>{goal}</Box>
                        <Box sx={{color: dayjs() < dayjs(date) ? '' : '#ff0000'}}>
                          By: {dayjs(date).format('MMMM DD, YYYY')}
                        </Box>
                      </CardContent>

                      <Collapse in={show === id}>
                        <Plan />
                      </Collapse>

                      <CardActions className="d-flex justify-content-between">
                        <Button sx={{color: 'white', textTransform: 'none'}} onClick={() => {
                          show === id ? setShow(null)
                                      : setShow(id)
                         }}>
                          {
                            show === id ? <>
                                            <ExpandLessRounded />
                                            <span>Hide plan</span>
                                          </>
                                        : <>
                                            <ExpandMoreRounded />
                                            <span>Show plan</span>
                                          </>
                          }
                        </Button>
                        <IconButton color="error" onClick={() => handleDelete(id)}>
                          <DeleteRounded />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Fade>
                )
              }
            })
          }
        </div>

        <Box className="d-flex flex-column justify-content-center align-items-center my-4"
         sx={list.filter(g => g.type === type).length > 0 ? {} : {minHeight: '75%'}}>
          <Fab color="secondary" variant="extended" className={`mb-3 ${AcneSemi.className}`}
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
