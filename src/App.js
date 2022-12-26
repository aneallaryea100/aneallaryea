import React from 'react';
import Welcome from './component/welcome/welcome';
import Navigation from './component/navigation/navigation';
import Projects from './component/projects/projects';
import About from './component/about/about';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

function App() {
  return (
   <div className="tatenda">
      <Navigation />
      <Welcome />
      <Projects />
      <About />
      <Contact />
      <Footer />
   </div>
  );
}

export default App;
