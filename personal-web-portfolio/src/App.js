import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import './App.scss'
import Experience from './components/Experience'
import ProjectList from './components/ProjectList'

function App() {
  return (
    <div className="wholelongPage">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectlist" element={<ProjectList />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App