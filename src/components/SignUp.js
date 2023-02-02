import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import { Box, Card, Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { makeStyles, withStyles } from '@mui/styles'

function SignUp() {
  //const classes = useStyles()

  return (
    <Box
      sx={{ backgroundColor: '#EDEAEA' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{ p: 5 }}>
        <Card justifyContent="center">
          <CardContent>
            <Typography component="h1" variant="h5">
              註冊 成為沒有人!
            </Typography>
          </CardContent>
          <CardContent>
            <Typography component="h1" variant="h5">
              Sign up to be NOBODY
            </Typography>
          </CardContent>
          <CardContent>
            <form>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">使用者名稱</InputLabel>
                <Input id="name" name="name" autoComplete="name" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="id">使用者ID</InputLabel>
                <Input id="id" name="id" autoComplete="id" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">密碼</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
            </form>
          </CardContent>
          <CardContent>
            <Stack spacing={1}>
              <Button variant="contained">使用帳號註冊</Button>
              <Button variant="outlined">使用Google帳號註冊</Button>
              <Button variant="outlined">使用Slack帳號註冊</Button>
              <Button variant="outlined">使用GitGub帳號註冊</Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default SignUp
