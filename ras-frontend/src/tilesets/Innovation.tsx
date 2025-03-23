import React from 'react';
import tacoImg from '../images/taco.png';
import brownArrow from '../images/brownArrow.png';
import greenArrow from '../images/greenArrow.png';
import splatter from '../images/Innovation_splatter.png'
import './Innovation.css';

function Innovation() {
  const arrowCount = 12;

  return (
    <section className="innovation-section">
      <img src={tacoImg} alt="Tacos" className="innovation-img" />

      <div className="innovation-header">
        <h2 className="innovation-title">Innovation</h2>
      </div>
      <div className="innovation-content">
        <div className="green-text-box">
          <p>Bringing education into nutrition — and making it fun. That’s what we aimed 
            to accomplish with the tables set up in Arrendando Café throughout the trial. 
            Keeping our largely Gen Z student body in mind, we “game-ified” science-heavy elements of our dietary curriculum.</p> 

            <p>Off putting terms like “phytonutrients” turned into engaging truth-or-myth puzzles 
            or multiple-choice trivia questions. We encouraged students to “match the terms” 
            to the definitions for phrases like “vegan,” “vegetarian” and “flexitarian” before 
            writing their own favorite signature dish on a whiteboard for future diners to peruse.</p> 

            <p>By inviting students to participate in their own learning — not just look at a static poster — we encouraged a deeper understanding of the facts and benefits of 
            plant-based eating.
          </p>
        </div>
      </div>

      <img 
        src = {splatter} 
        alt = "splatter"
        className ='background-splatter' 
        />

    </section>
  );
}

export default Innovation;
