import React from 'react';
import { About, Innovation, Landing, Marketing, Overview, SocialMedia, Education, Program, Feedback} from './tilesets/index';


function App() {
  return (
    <div className="bg-[#faf8f2]">
    <About/>
    <Innovation/>
    <Overview/>
    <Marketing/>
    <SocialMedia/>
    <Program/>
    <Education/>
    <Feedback/>
    </div>
  );
}

export default App;
