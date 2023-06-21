import { Paper } from "@mui/material";

export default function Goal ({type}) {

  return (
    <>
      <Paper className='paper' elevation={3}>
        <h1 className="my-3">{type}</h1>
      </Paper>
    </>
  )
}
