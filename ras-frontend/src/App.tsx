import React from 'react';
import { About, Innovation, Landing, Marketing, Overview, SocialMedia, Education} from './tilesets/index';


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
    <Education/>
    </div>
  );
}

export default App;
