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

function SignIn() {
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
              登入帳號
            </Typography>
          </CardContent>
          <CardContent>
            <Typography component="h1" variant="h5">
              Sign in to your account
            </Typography>
          </CardContent>
          <CardContent>
            <form>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">使用者名稱/ID</InputLabel>
                <Input id="name" name="name" autoComplete="name" autoFocus />
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
              <Stack direction="row" alignItems="center">
                <Typography>尚未註冊?</Typography>
                <Button variant="text" color="error">
                  立即註冊
                </Button>
              </Stack>
            </form>
          </CardContent>
          <CardContent>
            <Stack spacing={1}>
              <Button variant="outlined">使用Google帳號繼續</Button>
              <Button variant="outlined">使用Slack帳號繼續</Button>
              <Button variant="outlined">使用GitGub帳號繼續</Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default SignIn
