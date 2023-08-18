import './App.css'
import Navbar from './components/common/Navbar'
import Home from './components/views/Home'
import About from './components/views/About'
import Blog from './components/views/Blog'
import Presence from './components/views/Presence'
import Contact from './components/views/Contact'
import Footer from './components/common/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/presence' element={<Presence/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
<Footer />
    </BrowserRouter>
    </>
  )
}

export default App
