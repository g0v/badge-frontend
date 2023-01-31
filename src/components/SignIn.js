import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { withStyles } from '@mui/styles'

const styles = (theme) => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    color: '#EDEAEA',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})

function SignIn(props) {
  const { classes } = props

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          登入帳號
        </Typography>
        <Typography component="h1" variant="h5">
          Sign in to your account
        </Typography>
        <form className={classes.form}>
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
          <Button variant="text" color="error">
            立即註冊
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            使用帳號登入
          </Button>
          <Button
            type="submit"
            fullWidth
            color="textSecindary"
            variant="outlined"
            className={classes.submit}
          >
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg`}
              loading="lazy"
              width="20"
            />
            使用Goole登入
          </Button>
          <Button
            type="submit"
            fullWidth
            color="textSecindary"
            variant="outlined"
            className={classes.submit}
          >
            <img
              src={`https://pbs.twimg.com/tweet_video_thumb/DxIDCKUXQAAtE2-.jpg`}
              loading="lazy"
              width="20"
            />
            使用slack登入
          </Button>
          <Button
            type="submit"
            fullWidth
            color="textSecindary"
            variant="outlined"
            className={classes.submit}
          >
            <img
              src={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`}
              loading="lazy"
              width="20"
            />
            使用github登入
          </Button>
        </form>
      </Paper>
    </main>
  )
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignIn)
