import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import NavMenu from './components/NavMenu';
import './App.css'

export default function App() {
  return (
    <Router>
      <NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </NavMenu>
    </Router>
  )
}