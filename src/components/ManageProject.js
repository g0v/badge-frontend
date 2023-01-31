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
import BadgeCard from './BadgeCard'
import { useState } from 'react'
import { CardHeader } from '@mui/material'

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
          <Box sx={{ backgroundColor: '#e3f2fd', p: 2 }}>
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
                      <Typography variant="h5">坑名稱</Typography>
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
                      <Typography>intro</Typography>
                    ) : (
                      <Typography>{intro}</Typography>
                    )}
                  </>
                )}

                <IconButton onClick={toggleIntro}>
                  <EditIcon />
                </IconButton>
              </Stack>
              <Typography>管理員</Typography>
              <Stack direction="row" spacing={1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </Stack>
              <List>
                <ListItemButton>
                  <ListItemText>Slack</ListItemText>
                  <ListItemIcon>
                    <InsertLinkIcon />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>ARAY</ListItemText>
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
            <Stack spacing={1} align="center">
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <TextField
                        id="search-by-id"
                        label="使用者ID"
                        type="fullwidth"
                        autoComplete="current-password"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        新增坑管理員
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <Typography>網址發放成就</Typography>
                      <TextField
                        id="search-by-id"
                        label="輸入任務描述"
                        autoComplete="current-password"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        產生成就網址QRcode
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <Typography>手動發放成就</Typography>
                      <TextField
                        id="search-by-id"
                        label="輸入任務描述"
                        autoComplete="current-password"
                      />
                      <TextField
                        id="search-by-id"
                        label="輸入通過者ID"
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        新增成就
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Typography variant="h5">成就列表</Typography>
              <BadgeCard />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
