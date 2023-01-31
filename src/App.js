import logo from './logo.svg'
import './App.css'

import AppBar from './components/AppBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import PlatformBadge from './components/PlatformBadge'
import UserProfile from './components/UserProfile'
import ManagerDashboard from './components/ManagerDashboard'
import Manage from './components/ManageProject'
import Administrator from './components/Administrator'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <AppBar />
      <Administrator />
    </>
  )
}

export default App
