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
          <Typography variant="h5">你管理的坑</Typography>
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
