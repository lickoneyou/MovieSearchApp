import './App.css'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[
              <Aside key="Aside" />,
              <Header key="Header" />,
              <Main key="Main" />,
            ]}
          />
          <Route path="/rated" element={[<Aside key="Aside" />]} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
