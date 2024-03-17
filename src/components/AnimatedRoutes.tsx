import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'

export default function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
