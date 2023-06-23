import { AddRounded, CloseRounded, DeleteRounded, DoneRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, CardContent, Collapse, Fade, IconButton, Paper,
         TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function Plans ({goalId, show}) {
  const [plans, setPlans] = useState([])

  const [showNewPlan, setShowNewPlan] = useState(false)
  const [plan, setPlan] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const plansData = JSON.parse(localStorage.getItem('plansData'))
    setPlans(plansData)

    if(show !== goalId) {
      setShowNewPlan(false)
    }

    if(!showNewPlan) {
      setPlan('')
      setLoading(false)
    }
  }, [setPlans, showNewPlan, goalId, show])

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    const planId = () => {
      const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
    }

    const newPlan = {
      id: planId(),
      plan,
      goalId
    }

    const currentData = JSON.parse(localStorage.getItem('plansData'))
    localStorage.setItem('plansData', JSON.stringify([...currentData, newPlan]))

    setTimeout(() => {
      setShowNewPlan(false)
    }, 333)
  }

  const handleDelete = (id) => {
    const index = plans.findIndex(p => p.id === id)
    const updatedPlans = plans.toSpliced(index, 1)
    setPlans(updatedPlans)

    localStorage.setItem('plansData', JSON.stringify(updatedPlans))
  }

  return (
    <CardContent>
      <Box>
        {
          plans.map(p => {
            const {id, plan} = p

            if(p.goalId === goalId) {
              return (
                <Fade in key={id}>
                  <Paper sx={{marginBottom: '1rem', position: 'relative'}}>
                    <IconButton color="error" sx={{
                      position: 'absolute', top: '0.25rem', left: '0.25rem'
                     }} size='small' onClick={() => handleDelete(id)}>
                      <DeleteRounded sx={{fontSize: '16px'}} />
                    </IconButton>

                    <Box className='p-3'>{plan}</Box>
                  </Paper>
                </Fade>
              )
            }
          })
        }
      </Box>

      <Collapse in={showNewPlan}>
        <Paper>
          <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <TextField value={plan} id="goal" required disabled={loading}
              variant="filled" label="Plan" onChange={(e) => setPlan(e.target.value)}
              InputLabelProps={{ required: false }} sx={{margin: '1rem 0', width: '85%'}}
              multiline minRows={2} color="secondary" />

            <LoadingButton type="submit" loading={loading} sx={{textTransform: 'none',
             marginBottom: '1rem'}} loadingPosition="start" startIcon={<DoneRounded />}
             color="secondary">
              <span>Done</span>
            </LoadingButton>
          </form>
        </Paper>
      </Collapse>

      <Box sx={{marginTop: '1rem'}}>
        <Button sx={{color: 'black', textTransform: 'none', fontSize: '16px'}}
         onClick={() => setShowNewPlan(!showNewPlan)}>
          {
            showNewPlan ? <>
                            <CloseRounded />
                            <span>Cancel</span>
                          </>
                        : <>
                            <AddRounded />
                            <span>Create plan</span>
                          </>
          }
        </Button>
      </Box>
    </CardContent>
  )
}
