import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Homepage'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Policy from './pages/Policy'
import Contact from './pages/Contact'
import Register from './Auth/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/registration' element={<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App