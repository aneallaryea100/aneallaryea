import React from 'react';
import Welcome from './component/welcome/welcome';
import Navigation from './component/navigation/navigation';
import Projects from './component/projects/projects';
import About from './component/about/about';
function App() {
  return (
   <div className="tatenda">
      <Navigation />
      <Welcome />
      <Projects />
      <About />
   </div>
  );
}

export default App;
