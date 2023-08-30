import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Filials from '../Pages/Filials/Filials';
import FilialsCard from '../Pages/Cards_Filials/FilialsCard';
import Home from '../Pages/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

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