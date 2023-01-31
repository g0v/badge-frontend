import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'

function ProjectCard() {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={7} alignItems="center">
          <img
            src={`https://avatars.githubusercontent.com/u/3852089?v=4`}
            loading="lazy"
            width="50"
          />
          <Typography>坑名稱</Typography>
          <Typography>坑主</Typography>
          <Typography>簡介</Typography>
          <Chip label="HackMD tag" />
          <Button>Slack channel</Button>
          <Button>ARAY link</Button>
          <Button variant="contained">編輯</Button>
          <Button variant="contained">通過</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
