import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField,
         Fab, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { CloseRounded } from "@mui/icons-material";

export default function GoalDialog ({ open, setOpen, openedType }) {
  const [goal, setGoal] = useState('')
  const [goalDate, setGoalDate] = useState(dayjs())

  useEffect(() => {
    if(openedType === 'Short term') {
      setGoalDate(dayjs().add(7, 'day'))
    }
    if(openedType === 'Medium term') {
      setGoalDate(dayjs().add(3, 'month'))
    }
    if(openedType === 'Long term') {
      setGoalDate(dayjs().add(1, 'year'))
    }
  },[openedType])

  return (
    <Dialog open={open} onClose={(e, reason) => {
      if (reason === "backdropClick" || reason === 'escapeKeyDown') {
        return
      }
      setOpen(false)
     }} PaperProps={{
      sx: {width: '75%', minHeight: '80%', alignItems: 'center', position: 'relative'}
     }}>
      <DialogTitle sx={{fontSize: '2rem'}}>New Goal</DialogTitle>

      <DialogContent className="d-flex flex-column w-100">
        <TextField value={goal} id="goal" required disabled={false}
         variant="filled" label="Goal" onChange={(e) => setGoal(e.target.value)}
         InputLabelProps={{ required: false }} sx={{marginBottom: '2rem'}}
         multiline minRows={2} color="secondary" />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label='Achieve by' value={goalDate} onChange={
            (newValue) => setGoalDate(newValue)} slotProps={{ textField:
            {variant: 'filled', required: true, InputLabelProps: {required: false},
             color: 'secondary'} }} disablePast />
        </LocalizationProvider>
      </DialogContent>

      <DialogActions>
        <IconButton color="error" sx={{position: 'absolute', top: '0.5rem', right: '0.5rem'}}
         onClick={() => {
          setOpen(false)
         }}>
          <CloseRounded fontSize="large" />
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}
