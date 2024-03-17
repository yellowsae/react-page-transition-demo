import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'

import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <AnimatedRoutes />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>

    </div>
  )
}

export default App
