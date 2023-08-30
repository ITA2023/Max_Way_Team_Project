import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Filials from '../Pages/Filials/Filials';
import Contact from '../Pages/Contact/Contact';
import FilialsCard from '../Pages/Cards_Filials/FilialsCard';
import About from '../Pages/About/About';

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
        el: <Contact />
    },
    {
        id: 5,
        path: "/FilialsCard",
        el: <FilialsCard />
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