import { Route, Routes } from 'react-router-dom'
import './App.css'
import Base from './components/ui/Base/Base'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base></Base>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
