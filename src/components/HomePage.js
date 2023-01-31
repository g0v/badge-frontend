import React from 'react'
import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'

function HomePage() {
  return (
    <>
      <Box sx={{ backgroundColor: '#EDEAEA', p: 5 }}>
        <Stack alignItems="center" spacing={5}>
          <Typography variant="h4">關於g0v成就系統</Typography>
          <Typography variant="h6" color="textSecondary">
            成就系統intro
          </Typography>
          <Divider />
          <Typography variant="h5">友站連結</Typography>
          <Stack direction="row" spacing={3}>
            <Button variant="outlined" href="https://g0v.tw/">
              g0v.tw
            </Button>
            <Button variant="outlined" href="https://jothon.g0v.tw/">
              揪松網
            </Button>
            <Button variant="outlined" href="https://aray.g0v.tw/">
              ARAY
            </Button>
            <Button variant="outlined" href="https://www.facebook.com/g0v.tw">
              臉書後勤中心
            </Button>
            <Button
              variant="outlined"
              href="https://app.slack.com/client/T02G2SXKM/C02G2SXKX"
            >
              Slack 聊天室
            </Button>
            <Button
              variant="outlined"
              href="https://g0v.hackmd.io/?nav=overview"
            >
              Hackmd 共筆
            </Button>
          </Stack>
          <Divider />
          <Typography variant="h5">最新加入的使用者</Typography>
          <Stack direction="row" spacing={3}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default HomePage
