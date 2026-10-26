import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {UserPage} from './pages/UserPage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage.tsx'
import { NavBar } from './components/NavBar.tsx'
import { UserNewPage } from './pages/UserNewPage.tsx'
import { UserEditPage } from './pages/UseEditPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <header className='container-fluid mb-2'>
        <NavBar />
      </header>
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />        
          <Route path='/user' element={<UserPage />} />
          <Route path='/user/new' element={<UserNewPage />} />
          <Route path='/user/:id' element={<UserEditPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>,
)
