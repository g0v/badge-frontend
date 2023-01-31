import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { withStyles } from '@mui/styles'

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography)

function ProjectCard() {
  return (
    <>
      <Box sx={{ backgroundColor: 'black', align: 'center', p: 2 }}>
        <WhiteTextTypography variant="h5">申請開坑</WhiteTextTypography>
      </Box>
      <Box sx={{ p: 2, align: 'center' }}>
        <Stack direction="column" spacing={1}>
          <Typography>說明文字(會在#general公告三天，採異議制)</Typography>
          <Typography>請輸入坑名*</Typography>
          <TextField id="outlined-name" label="語言不限，不超過64位元" />
          <Typography>請輸入坑ID*</Typography>
          <TextField
            id="outlined-name"
            label="限英文、數字或特定符號，不超過32位元"
          />
          <Typography>坑的簡介*</Typography>
          <TextField id="outlined-name" label="語言不限，不超過1024位元" />
          <Typography>若有其他坑管理員，請輸入其他管理員ID</Typography>
          <Typography>Slack連結</Typography>
          <TextField id="outlined-name" label="Slack 頻道連結" />
          <Typography>ARAY連結</Typography>
          <TextField id="outlined-name" label="ARAY連結" />
          <Button variant="contained">提交申請</Button>
        </Stack>
      </Box>
    </>
  )
}

export default ProjectCard
