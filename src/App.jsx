import { Routes,Route,} from 'react-router-dom'
import './App.css'
import AddCars from './pages/AddCars'
import Cars from './pages/Cars'

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Cars/>}/>
      <Route path='/add' element={<AddCars/>}/>
    </Routes>

    </>
  )
}

export default App
