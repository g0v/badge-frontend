import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Avatar from '@mui/material/Avatar'
import { IconButton } from '@mui/material'

function ProjectCard() {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography>成就名稱</Typography>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <DeleteIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
