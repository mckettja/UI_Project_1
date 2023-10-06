import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Productive from './components/Productive';
import Entertainment from './components/Entertainment';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" exact element={<Productive/>} />
          <Route path="/other" element={<Entertainment/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;