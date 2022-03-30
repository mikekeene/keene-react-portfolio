import React from 'react';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
        <>
          <About />
          <Contact />
          <Resume />
          <Projects />
        </>
      <Footer />
    </div>
  );
}

export default App;
