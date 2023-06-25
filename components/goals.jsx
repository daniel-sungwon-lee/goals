import { AddRounded, DeleteRounded, ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Chip, Collapse, Fab, Fade,
         IconButton, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import dayjs from "dayjs";
import Plans from "./plans";

const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })

export default function Goals ({ type, setOpen, setOpenedType, dataUpdated, setDataUpdated }) {
  const [list, setList] = useState([])
  const [show, setShow] = useState(null)

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('goalsData'))) {
      localStorage.setItem('goalsData', JSON.stringify([]))
    }
    if (!JSON.parse(localStorage.getItem('plansData'))) {
      localStorage.setItem('plansData', JSON.stringify([]))
    }

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

        <div className="mb-5">
          {
            list.filter(goal => goal.type === type && goal.category === 'health').length > 0
              ? <div className="mb-4">
                  <div className="d-flex flex-column align-items-start mx-4">
                    <Chip label='Health' className="mb-3" sx={{background: '#C3B1E1',
                      fontSize: '18px', borderRadius: '2rem', padding: '1.25rem'}} />
                  </div>
                  {
                    list.map(g => {
                      const { id, goal, category, date, type: goalType } = g

                      if (goalType === type && category === 'health') {
                        return (
                          <Fade key={id} in>
                            <Card className="mx-4 mb-3" sx={{ background: '#ECB6AC' }}>
                              <CardContent sx={{ textAlign: 'left' }}>
                                <Box sx={{ textTransform: 'capitalize', color: 'white' }}>
                                  {category}
                                </Box>
                                <Box className='h4'>{goal}</Box>
                                <Box sx={{ color: dayjs() < dayjs(date) ? '' : '#ff0000' }}>
                                  By: {dayjs(date).format('MMMM DD, YYYY')}
                                </Box>
                              </CardContent>

                              <Collapse in={show === id}>
                                <Plans goalId={id} show={show} />
                              </Collapse>

                              <CardActions className="d-flex justify-content-between">
                                <Button sx={{color: 'white', textTransform: 'none',
                                  fontSize: '16px'}} onClick={() => {
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
              : <></>
          }

          {
            list.filter(goal => goal.type === type && goal.category === 'career').length > 0
              ? <div className="mb-4">
                  <div className="d-flex flex-column align-items-start mx-4">
                    <Chip label='Career' className="mb-3" sx={{background: '#C3B1E1',
                      fontSize: '18px', borderRadius: '2rem', padding: '1.25rem'}} />
                  </div>
                  {
                    list.map(g => {
                      const { id, goal, category, date, type: goalType } = g

                      if (goalType === type && category === 'career') {
                        return (
                          <Fade key={id} in>
                            <Card className="mx-4 mb-3" sx={{ background: '#ECB6AC' }}>
                              <CardContent sx={{ textAlign: 'left' }}>
                                <Box sx={{ textTransform: 'capitalize', color: 'white' }}>
                                  {category}
                                </Box>
                                <Box className='h4'>{goal}</Box>
                                <Box sx={{ color: dayjs() < dayjs(date) ? '' : '#ff0000' }}>
                                  By: {dayjs(date).format('MMMM DD, YYYY')}
                                </Box>
                              </CardContent>

                              <Collapse in={show === id}>
                                <Plans goalId={id} show={show} />
                              </Collapse>

                              <CardActions className="d-flex justify-content-between">
                                <Button sx={{color: 'white', textTransform: 'none',
                                  fontSize: '16px'}} onClick={() => {
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
              : <></>
          }

          {
            list.filter(goal => goal.type === type && goal.category === 'finances').length > 0
              ? <div className="mb-4">
                  <div className="d-flex flex-column align-items-start mx-4">
                    <Chip label='Finances' className="mb-3" sx={{background: '#C3B1E1',
                      fontSize: '18px', borderRadius: '2rem', padding: '1.25rem'}} />
                  </div>
                  {
                    list.map(g => {
                      const { id, goal, category, date, type: goalType } = g

                      if (goalType === type && category === 'finances') {
                        return (
                          <Fade key={id} in>
                            <Card className="mx-4 mb-3" sx={{ background: '#ECB6AC' }}>
                              <CardContent sx={{ textAlign: 'left' }}>
                                <Box sx={{ textTransform: 'capitalize', color: 'white' }}>
                                  {category}
                                </Box>
                                <Box className='h4'>{goal}</Box>
                                <Box sx={{ color: dayjs() < dayjs(date) ? '' : '#ff0000' }}>
                                  By: {dayjs(date).format('MMMM DD, YYYY')}
                                </Box>
                              </CardContent>

                              <Collapse in={show === id}>
                                <Plans goalId={id} show={show} />
                              </Collapse>

                              <CardActions className="d-flex justify-content-between">
                                <Button sx={{color: 'white', textTransform: 'none',
                                  fontSize: '16px'}} onClick={() => {
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
              : <></>
          }

          {
            list.filter(goal => goal.type === type && goal.category === 'relationships').length > 0
              ? <div className="mb-4">
                  <div className="d-flex flex-column align-items-start mx-4">
                    <Chip label='Relationships' className="mb-3" sx={{background: '#C3B1E1',
                      fontSize: '18px', borderRadius: '2rem', padding: '1.25rem'}} />
                  </div>
                  {
                    list.map(g => {
                      const { id, goal, category, date, type: goalType } = g

                      if (goalType === type && category === 'relationships') {
                        return (
                          <Fade key={id} in>
                            <Card className="mx-4 mb-3" sx={{ background: '#ECB6AC' }}>
                              <CardContent sx={{ textAlign: 'left' }}>
                                <Box sx={{ textTransform: 'capitalize', color: 'white' }}>
                                  {category}
                                </Box>
                                <Box className='h4'>{goal}</Box>
                                <Box sx={{ color: dayjs() < dayjs(date) ? '' : '#ff0000' }}>
                                  By: {dayjs(date).format('MMMM DD, YYYY')}
                                </Box>
                              </CardContent>

                              <Collapse in={show === id}>
                                <Plans goalId={id} show={show} />
                              </Collapse>

                              <CardActions className="d-flex justify-content-between">
                                <Button sx={{color: 'white', textTransform: 'none',
                                  fontSize: '16px'}} onClick={() => {
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
              : <></>
          }
        </div>

        <Box className="d-flex flex-column justify-content-center align-items-center mt-4 mb-5"
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
