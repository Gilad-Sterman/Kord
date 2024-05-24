import { useState } from 'react'
import { Route, HashRouter as Router, Routes, useLocation } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Upload } from './pages/Upload'
import { Catalog } from './pages/Catalog'
import { Player } from './cmps/Player'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Create } from './pages/Create'
import { AppFooter } from './cmps/AppFooter'
import { Profile } from './pages/Profile'
import { Notifications } from './pages/Notifications'
import { Settings } from './pages/Settings'
import { Signup } from './pages/Signup'

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <section className='full-Page'>
            <AppHeader />
            <Routes>
              <Route path='/login' Component={Login} />
              <Route path='/signup' Component={Signup} />
              <Route path='/upload' Component={Upload} />
              <Route path='/create' Component={Create} />
              <Route path='/search' Component={Catalog} />
              <Route path='/notifications' Component={Notifications} />
              <Route path='/profile' Component={Profile} />
              <Route path='/settings' Component={Settings} />
              <Route path='/' Component={Home} />
            </Routes>
            <Player />
            <AppFooter />
          </section>
        </Router>
      </Provider>
    </>
  )
}

export default App
