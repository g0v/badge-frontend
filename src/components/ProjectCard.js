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
import Divider from '@mui/material/Divider'

function ProjectCard() {
  return (
    <Box sx={{ p: 5, align: 'center' }}>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={2}>
          <img
            src={`https://avatars.githubusercontent.com/u/3852089?v=4`}
            loading="lazy"
            width="250"
          />
          <Stack direction="column" spacing={1}>
            <Typography variant="h4">坑名稱</Typography>
            <Typography variant="h6">@坑ID</Typography>
            <Link href="#">ARAY Link</Link>
            <Link href="#">Slack頻道</Link>
            <Typography color="textSecondary">簡介</Typography>
          </Stack>
          <Stack direction="column" spacing={1}>
            <Chip label="#tag1" />
            <Chip label="#tag2" />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Typography variant="h6" color="textPPrimary">
              管理員
            </Typography>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Stack>
        </Stack>
        <Typography variant="h6" color="textPPrimary">
          目前發布的成就
        </Typography>
        <Divider variant="middle" />
        <Grid container>
          <Grid item xs={12} sm={6} md={12} alignItems="center">
            <Card>
              <CardContent>
                <Stack direction="row" spacing={10}>
                  <Typography color="textPPrimary">成就A</Typography>
                  <Typography color="textPPrimary">內容</Typography>
                  <Typography color="textPPrimary">期限</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}

export default ProjectCard
