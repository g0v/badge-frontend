import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import EditIcon from '@mui/icons-material/Edit'
import TextField from '@mui/material/TextField'
import ListItemIcon from '@mui/material/ListItemIcon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import Dialog from '@mui/material/Dialog'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import ProjectCard from './OpenProject'
import { useState } from 'react'
import { CardHeader } from '@mui/material'

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

export default function UserProfile() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
  }
  const [name, setName] = useState('')
  const [id, setID] = useState('')
  const [intro, setIntro] = useState('')
  const [IsSetName, settingName] = useState(false)
  const [IsSetID, settingID] = useState(false)
  const [IsSetIntro, settingIntro] = useState(false)
  const toggleName = () => {
    settingName((IsSetName) => !IsSetName)
  }
  const toggleID = () => {
    settingID((IsSetID) => !IsSetID)
  }
  const toggleIntro = () => {
    settingIntro((IsSetIntro) => !IsSetIntro)
  }
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setID(event.target.value)
  }
  const handleIntroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntro(event.target.value)
  }

  const [showSlack, setShowSlack] = useState(false)
  const [showHack, setShowHack] = useState(false)
  const [showKKtix, setShowKKtix] = useState(false)

  const toggleSlack = () => {
    setShowSlack((showSlack) => !showSlack)
  }
  const toggleHackMD = () => {
    setShowHack((showHack) => !showHack)
  }
  const toggleKKtix = () => {
    setShowKKtix((showKKtix) => !showKKtix)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: '#EDEAEA', p: 2 }}>
            <Stack alignItems="center" spacing={1}>
              <img
                src={`https://avatars.githubusercontent.com/u/3852089?v=4`}
                loading="lazy"
                width="250"
              />
              <Stack direction="row" spacing={1}>
                {IsSetName ? (
                  <TextField
                    id="outlined-name"
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                ) : (
                  <>
                    {name === '' ? (
                      <Typography variant="h5">Username</Typography>
                    ) : (
                      <Typography variant="h5">{name}</Typography>
                    )}
                  </>
                )}

                <IconButton onClick={toggleName}>
                  <EditIcon />
                </IconButton>
              </Stack>

              <Stack direction="row" spacing={1}>
                {IsSetID ? (
                  <TextField
                    id="outlined-id"
                    label="ID"
                    value={id}
                    onChange={handleIDChange}
                  />
                ) : (
                  <>
                    {id === '' ? (
                      <Typography>@UserID</Typography>
                    ) : (
                      <Typography>@{id}</Typography>
                    )}
                  </>
                )}

                <IconButton onClick={toggleID}>
                  <EditIcon />
                </IconButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Chip label="#tag1" />
                <Chip label="#tag2" />
                <Chip label="#tag3" />
              </Stack>
              <Stack direction="row" spacing={1}>
                {IsSetIntro ? (
                  <TextField
                    id="outlined-intro"
                    label="self intro"
                    value={intro}
                    onChange={handleIntroChange}
                  />
                ) : (
                  <>
                    {intro === '' ? (
                      <Typography>self intro</Typography>
                    ) : (
                      <Typography>{intro}</Typography>
                    )}
                  </>
                )}

                <IconButton onClick={toggleIntro}>
                  <EditIcon />
                </IconButton>
              </Stack>
              <List>
                <ListItemButton>
                  <ListItemText>Slack</ListItemText>
                  <ListItemIcon>
                    <InsertLinkIcon />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>HackMD</ListItemText>
                  <ListItemIcon>
                    <InsertLinkIcon />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>KKtix</ListItemText>
                  <ListItemIcon>
                    <InsertLinkIcon />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ backgroundColor: 'white', p: 2 }}>
            <Stack spacing={1}>
              <Stack direction="row" spacing={3}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleClickOpen}
                >
                  申請開坑
                </Button>
                <SimpleDialog open={open} onClose={handleClose} />
                <Button variant="outlined" size="large">
                  管理我的坑
                </Button>
              </Stack>
              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">Slack</Typography>
                    <IconButton>
                      <InsertLinkIcon />
                    </IconButton>
                    <Typography>@Slackid</Typography>
                    <IconButton onClick={toggleSlack}>
                      <ArrowDropDownCircleIcon />
                    </IconButton>
                  </Stack>
                  <Divider />
                  {showSlack ? <>slack badge</> : <></>}
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">HackMD</Typography>
                    <IconButton>
                      <InsertLinkIcon />
                    </IconButton>
                    <Typography>@HackMD</Typography>
                    <IconButton onClick={toggleHackMD}>
                      <ArrowDropDownCircleIcon />
                    </IconButton>
                  </Stack>
                  <Divider />
                  {showHack ? <>hack badge</> : <></>}
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">KKtix</Typography>
                    <IconButton>
                      <InsertLinkIcon />
                    </IconButton>
                    <Typography>@KKtix</Typography>
                    <IconButton onClick={toggleKKtix}>
                      <ArrowDropDownCircleIcon />
                    </IconButton>
                  </Stack>
                  <Divider />
                  {showKKtix ? <>kk badge</> : <></>}
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
