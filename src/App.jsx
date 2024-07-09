import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './COMPONENTS/HomePage'
import RoomNo1 from './COMPONENTS/RoomNo1'
import RoomNo2 from './COMPONENTS/RoomNo2'
import RoomNo3 from './COMPONENTS/RoomNo3'
import GardenStuff from './COMPONENTS/GardenStuff'
import WatchigTv from './COMPONENTS/Room1/WatchigTv'
import ReadingBooks from './COMPONENTS/Room1/ReadingBooks'
import FoldDress from './COMPONENTS/Room2/FoldDress';
import PlayGuitar from './COMPONENTS/Room2/PlayGuitar';
import BreakFast from './COMPONENTS/Room3/BreakFast';
import LunCh from './COMPONENTS/Room3/LunCh';
import DinNer from './COMPONENTS/Room3/DinNer';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/room-1' element={<RoomNo1/>}/>
        <Route path='/watch' element={<WatchigTv/>}/>
        <Route path='/read' element={<ReadingBooks/>}/>
        <Route path='/room-2' element={<RoomNo2/>}/>
        <Route path='/dress' element={<FoldDress/>}/>
        <Route path='/playing-guitar' element={<PlayGuitar/>}/>
        <Route path='/room-3' element={<RoomNo3/>}/>
        <Route path='/break-fast' element={<BreakFast/>}/>
        <Route path='/lunch' element={<LunCh/>}/>
        <Route path='/dinner' element={<DinNer/>}/>

        <Route path='/garden' element={<GardenStuff/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
