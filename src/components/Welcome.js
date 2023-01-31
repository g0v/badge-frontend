import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { withStyles } from '@mui/styles'
import { IconButton } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#ba000d',
  },
  intro: {
    color: '#eceff1',
  },
}))

function Welcome() {
  const classes = useStyles()
  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" alignItems="center">
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <Typography color="textSecondary">已有帳號?返回登入</Typography>
      </Stack>
      <Typography variant="h4">Welcome to G0V Badge</Typography>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item sm={6} md={6} lg={6}>
          <Button variant="contained">Contained</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Welcome
