import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Places from './Pages/Places'
import Flights from './Pages/Flights'
import MapLocation from './Pages/MapLocation'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Flights" element={<Flights />} />
          <Route path="/MapLocation" element={<MapLocation position={[51.505, -0.09]}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
