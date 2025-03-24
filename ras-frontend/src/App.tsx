import React from 'react';
import { About, Innovation, Landing, Marketing, Overview, SocialMedia } from './tilesets/index';


function App() {
  return (
    <div className="bg-[#faf8f2]">
    <About/>
    <Innovation/>
    <Overview/>
    <Landing/>
    <Marketing/>
    <SocialMedia/>
    <Overview/>
    </div>
  );
}

export default App;
