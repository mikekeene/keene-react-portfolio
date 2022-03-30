import React from 'react';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
        <>
          <Cover />
          <About />
          <Projects />
        </>
      <Footer />
    </div>
  );
}

export default App;
