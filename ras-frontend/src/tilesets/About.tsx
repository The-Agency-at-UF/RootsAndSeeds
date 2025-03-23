import React from 'react'
import arrow from '../images/arrows.png'
import flower from '../images/about_flower.png'
import foodPlatter from '../images/foodPlate.png'
import imageBacking from '../images/about_img_background.png'
import pattern_top from '../images/abt_backgroundTop.png'
import pattern_middle from '../images/abt_backgroundMiddle.png'
import pattern_bottom from '../images/abt_backgroundBottom.png'
import './About.css'

function About(){
    return (<section className='about-section'>

        <div className='about-content'>
            <div className="about-image-container">
                <img src={imageBacking} alt="Green backing" className="image-backing" />
                <img src={pattern_top} alt="Pattern top" className="pattern-top" />
                <img src={pattern_middle} alt="Pattern middle" className="pattern-middle" />
                <img src={pattern_bottom} alt="Pattern bottom" className="pattern-bottom" />
                <img src={foodPlatter} alt="Food platter" className="food-platter" />
            </div>
            <div className='about-info'>
                <div className='about-header'>
                    <h2 className='about-title'>About Roots and Seeds</h2>
                    <img
                        src = {arrow}
                        alt = "row of arrows"
                        className= 'arrow-abt'
                    />
                </div>
                <p>Florida Fresh Dining strives to encourage students to explore new cuisines while supporting their existing dietary needs and preferences. 
                After a 2023 survey revealed 14% of students wanted more plant-based dining options, we launched the Roots & Seeds Plant-Forward Trial. 
                Beyond offering nutrient-dense meals, the program also educated attendees on the health and sustainability benefits of a colorful palette.</p>

                <p>The two-week Plant-Forward Trial took place at the on-campus Arredondo Café in February and March 2024. Students ate from featured 
                daily menus of plant-based dishes, ranging from Thai coconut carrot soup to Nopales street tacos to sweet potato pie.</p>

                <p>Throughout the event, on-campus dietician Syd Watkins hosted educational tables on themes such as “Truth or Myth: Plant-Based Edition” 
                and “Building a colorful plate.” The trial corresponded with National Nutrition Month, which the Academy of Nutrition and Dieticians celebrates 
                each year. “Beyond the Table,” the 2024 theme, highlighted farm-to-fork nutrition habits. Accordingly, Watkins offered facts on the global food 
                footprint; for example, that a vegetarian diet could reduce a single person’s water consumption by over one-half.</p>

                <p>Students also learned about health benefits, such as lower risk of cardiovascular disease and improved insulin sensitivity, of moving away from 
                animal-derived products. The “Truth or Myth” station discredited myths that plant-based diets lead to nutrient deficiencies or lack protein, 
                instead highlighting protein-rich foods like lentils, tempeh and quinoa.</p>

                <p>A mix of new and returning diners visited to taste Arredondo’s special menu. <b>Nearly 40% of respondents to an exit survey indicated that they 
                had not previously dined at Arredondo Café, suggesting the trial appealed to a broader audience.</b></p>

                <p>Diners also said they appreciated the quality and variety of menu options offered; an overwhelming majority rated their meal four or five stars 
                for taste. Over three-fourths said they would return to dine at Arredondo if they continued with plant-based menu options long term.</p>

                <p>Roots & Seeds at dining hall Gator Corner currently offers plant-based meals daily to students interested in diversifying their diet or reducing 
                their carbon footprint. The Plant-Forward Trial served as a valuable opportunity to assess the demand for plant-based meals and gather 
                insights to guide our future initiatives — expanding body- and environment-friendly options to a growing population of interested diners.</p>
            </div>
        </div>

        <img
            src = {flower}
            alt = "flower"
            className = "background-flower"
        />
    </section>
    );
}

export default About;