import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Event from './pages/event';
import Rentals from './pages/rentals';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact'
import Dropdown from './components/Dropdown';
import DjService from './pages/djService';
import Content from './components/Content';
import Hero from './components/Hero';
import table from './pages/table'
import project_furniture from './pages/project_furniture'
import special_fx from './pages/special_fx'
import led_rentals from './pages/led_rentals'
import mapLocated from './pages/maplocation'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}>
            <Hero />
            <Content />
            <About />
            <Contact />
            <Route component={mapLocated}/>
            </Route>
          <Route path='/event' exact component={Event} />
          <Route path='/rentals' exact component={Rentals} />
          <Route path='/djservice' exact component={DjService} />
          <Route path='/table' exact component={table} />
          <Route path='/project_furniture' exact component={project_furniture} />
          <Route path='/special_fx' exact component={special_fx} />
          <Route path='/led_rentals' exact component={led_rentals} />
        </Switch>
        <Footer/>

      </Router>
    </>
  );
}

export default App;

