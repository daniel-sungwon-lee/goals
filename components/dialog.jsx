import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField,
         Fab, IconButton, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { AddRounded, CloseRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export default function GoalDialog ({ open, setOpen, openedType }) {
  const [goalCategory, setGoalCategory] = useState('')
  const [goal, setGoal] = useState('')
  const [goalDate, setGoalDate] = useState(dayjs())
  const [dialogLoading, setDialogLoading] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Dialog open={open} onClose={(e, reason) => {
      if (reason === "backdropClick" || reason === 'escapeKeyDown') {
        return
      }
      setOpen(false)
     }} PaperProps={{
      sx: {width: '75%', alignItems: 'center', position: 'relative'}
     }}>
      <DialogTitle sx={{fontSize: '2rem'}}>New Goal</DialogTitle>

      <form className="w-100" onSubmit={handleSubmit}>
        <DialogContent className="d-flex flex-column w-100">
          <FormControl required variant="filled" color="secondary" sx={{marginBottom: '2rem'}}
           disabled={dialogLoading}>
            <InputLabel required={false}>Goal category</InputLabel>
            <Select value={goalCategory} onChange={(e) => setGoalCategory(e.target.value)}>
              <MenuItem value='health'>Health</MenuItem>
              <MenuItem value='career'>Career</MenuItem>
              <MenuItem value='finances'>Finances</MenuItem>
              <MenuItem value='relationships'>Relationships</MenuItem>
            </Select>
          </FormControl>

          <TextField value={goal} id="goal" required disabled={dialogLoading}
          variant="filled" label="Goal" onChange={(e) => setGoal(e.target.value)}
          InputLabelProps={{ required: false }} sx={{marginBottom: '2rem'}}
          multiline minRows={2} color="secondary" />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label='Achieve by' value={goalDate} onChange={
              (newValue) => setGoalDate(newValue)} slotProps={{ textField:
              {variant: 'filled', required: true, InputLabelProps: {required: false},
              color: 'secondary'} }} disablePast disabled={dialogLoading} />
          </LocalizationProvider>
        </DialogContent>

        <DialogActions className="justify-content-center">
          <IconButton color="error" sx={{position: 'absolute', top: '0.5rem', right: '0.5rem'}}
          onClick={() => {
            setGoalCategory('')
            setGoal('')
            setGoalDate(dayjs())
            setDialogLoading(false)
            setOpen(false)
          }}>
            <CloseRounded fontSize="large" />
          </IconButton>

          <LoadingButton type='submit' loading={dialogLoading} sx={{
            textTransform: 'none', marginBottom: '1rem', width: '90px', borderRadius: '2rem'
          }} loadingPosition='start' startIcon={<AddRounded />} color="secondary">
            <span style={{marginTop: '2px', fontSize: '16px'}}>Add</span>
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  )
}
