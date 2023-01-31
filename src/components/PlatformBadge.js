import React from 'react'
import useState from 'react'
import Button from '@mui/material/Button'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { makeStyles, withStyles } from '@mui/styles'
import Divider from '@mui/material/Divider'
import GolfCourseIcon from '@mui/icons-material/GolfCourse'
import { Paper } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const useStyles = makeStyles({
  timeline: {
    transform: 'rotate(90deg)',
  },
  timelineContentContainer: {
    textAlign: 'left',
  },
  timelineContent: {
    display: 'inline-block',
    transform: 'rotate(-90deg)',
    textAlign: 'center',
    minWidth: 50,
  },
  timelineIcon: {
    transform: 'rotate(-90deg)',
  },
})

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function PlatformBadge() {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <Box sx={{ backgroundColor: '#EDEAEA', p: 5 }}>
        <Stack alignItems="center" spacing={5}>
          <Typography variant="h4">各平台成就列表</Typography>
          <Divider variant="middle" />
          <Typography variant="h6">Slack</Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="發言" {...a11yProps(0)} />
              <Tab label="評價" {...a11yProps(1)} />
              <Tab label="頻道參與" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Timeline className={classes.timeline} align="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <GolfCourseIcon className={classes.timelineIcon} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                  200
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                  100
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                  50
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                  10
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                  5
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Stack>
      </Box>
    </>
  )
}

export default PlatformBadge
