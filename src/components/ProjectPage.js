import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { withStyles } from '@mui/styles'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import ProjectCard from './ProjectCard'

const styles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
})

const users = [
  {
    title: 'G0V黑克松',
    time: '2002-03-01',
    description: ['建立 50 個 Pad', '參加了 5 次大松', '送出 50 個 commit'],
  },
  {
    title: '零時小學校',
    time: '2021-12-18',
    description: ['參加了 20 次小松', '參與 10 個 Note', '發言 10 次'],
  },
  {
    title: 'ARAY',
    time: '2021-09-17',
    description: [
      '在 domain 回應了 100 個 issue',
      '發言 400 次',
      '在 general 頻道發言 400 次',
    ],
  },
  {
    title: 'cofacts',
    time: '2017-02-20',
    description: ['頻道發言 10 次', '發言 400 次', '參與 1000 個 Note'],
  },
  {
    title: 'jothon',
    time: '2017-06-14',
    description: ['頻道發言 10 次', '發言 400 次', '參與 1000 個 Note'],
  },
]
const service = ['slack', 'github', 'Hackpad', 'kktix']

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#ba000d',
  },
  intro: {
    color: '#eceff1',
  },
}))

const emails = ['username@gmail.com', 'user02@gmail.com']

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: string) => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <ProjectCard />
    </Dialog>
  )
}

function User() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
    setSelectedValue(value)
  }
  return (
    <>
      <Stack justifyContent="center" direction="row">
        <Box sx={{ p: 5 }}>
          <Card>
            <Stack direction="row">
              <CardContent>
                <Stack direction="column" alignItems="center" spacing={2}>
                  <Typography
                    variant="h6"
                    align="center"
                    //color="textSecondary"
                    component="p"
                  >
                    坑坑列表
                  </Typography>
                  <TextField
                    id="search-by-pit"
                    label="用專案搜尋"
                    type="fullwidth"
                    autoComplete="current-password"
                    fullWidth
                    size="small"
                  />
                  <TextField
                    id="search-by-badge"
                    label="用標籤搜尋"
                    type="fullwidth"
                    autoComplete="current-password"
                    fullWidth
                    size="small"
                  />
                </Stack>
              </CardContent>
            </Stack>
          </Card>
        </Box>
      </Stack>
      <Box sx={{ p: 5, backgroundColor: '#EDEAEA' }}>
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={2} key={user} alignItems="center">
              <Card alignItems="center">
                <CardContent>
                  <img
                    src={`https://avatars.githubusercontent.com/u/3852089?v=4`}
                    loading="lazy"
                    width="150"
                  />
                </CardContent>
                <CardHeader
                  classes={{ title: classes.title }}
                  title={user.title}
                  subheader={user.time}
                  titleTypographyProps={{ align: 'center', color: '#f44336' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                />
                <CardContent>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    size="small"
                  >
                    查看此坑發布的成就
                  </Button>
                  <SimpleDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                  />
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default User
