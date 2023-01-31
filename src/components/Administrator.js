import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Button, Divider, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import ProjectCard from './ManageProjectCard'

function Manage() {
  return (
    <>
      <Box sx={{ backgroundColor: '#e3f2fd', p: 5 }}>
        <Stack spacing={5} justifyContent="center" align="center">
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
                    新增管理員
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Typography variant="h5">新坑審核</Typography>
          <Card style={{ backgroundColor: '#42a5f5' }}></Card>
        </Stack>

        <Stack spacing={2}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Stack>
      </Box>
    </>
  )
}

export default Manage
