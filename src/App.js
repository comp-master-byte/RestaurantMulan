import React from 'react'
import styled from 'styled-components'
import './styles/main.scss'
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import { Menu } from './pages/Menu';
import { Stock } from './pages/Stock';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Footer } from './components/Footer';


const Section = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`

function App() {
  return (
    <Router>
      <Section>
        <Navigation/>
      </Section>
      <Switch>
        <Route path='/about' component={Landing}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/action' component={Stock}/>
        <Redirect to='/about'/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
