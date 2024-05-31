
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

function App() {


  return (
    <div className="flex h-screen bg-gradient-to-tr from-[#182c47] to-[#151229] overflow-hidden ">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
