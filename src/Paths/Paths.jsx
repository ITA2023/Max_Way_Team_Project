import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Filials from '../pages/Filials/Filials';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

export const Paths = [
    {
        id: 1,
        path: "/",
        el: <Home />
    },
    {
        id: 2,
        path: "/Filials",
        el: <Filials />
    },
    {
        id: 3,
        path: "/About",
        el: <About />
    },
    {
        id: 4,
        path: "/Contact",
        el: <Contact/>
    }
]

const Index = () => {
  return (
    <React.Fragment>
        <Nav />
        {
            Paths.map((path)=>{
                return(
                    <Routes key={path.id}>
                        <Route path={path.path} element={path.el} />
                    </Routes>
                )
            })
        }
        <Footer />
    </React.Fragment>
  )
}

export default Index;