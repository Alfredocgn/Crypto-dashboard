
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

function App() {


  return (
    <div className="flex h-screen bg-gradient-to-br from-[#1a2c4b] to-[#151229] ">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
