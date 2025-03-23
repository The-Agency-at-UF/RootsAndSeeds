import React from 'react'
import arrows from "../images/arrows.png"
import flower from '../images/overview-flower.png'
import './Overview.css'

function Overview(){
    return (<section className='overview-section'>
        <img
            src = {flower}
            alt = "floral background"
            className= 'overview-flower'
        />

        <div className='overview-header'>
            <h2 className='overview-title'>Overview of <br />Cirriculum</h2>
            <img
                src = {arrows}
                alt = "row of arrows"
                className='overview-arrows'
            />
        </div>
        <div className='overview-info'>
            <p>Our curriculum emphasizes the accessibility of plant-based food choices. 
            Using easy-to-understand concepts — like “<b>eating the rainbow</b>” by filling half the 
            plate with non-starchy vegetables — we strive to make well-balanced diets less 
            daunting and more achievable for interested diners.</p>

            <p>Throughout our curriculum, we also remind students <b>how</b> fruits and vegetables can benefit their 
                health. Diners may be more likely to reach for yellow vegetables if they know their lutein and 
                zeaxanthin content can protect their eyes from cataracts. Or, they might be quick to add sweet 
                potatoes to their plate if they remember the orange starch is high in Vitamin A.</p>

            <p>We prioritize well-balanced nutrition rather than caloric restriction or restrictive dieting. 
                Our “<b>Building a Colorful Plate</b>” table reminded students whole grains are an excellent source 
                offiber, while our “Why Plant-Based” pamphlet encouraged students to remember “carbs are your 
                friend.”</p>

            <p>Knowing vegetarian and vegan diets often carry connotations, we created an interactive “Truth 
                or Myth: Plant-Based Edition” pop-up with trivia questions debunking common stigmas. The 
                curriculum reminded diners a plant-based diet doesn’t have to be a protein-lacking one. 
                Plant-based eating can be suitable for everyone at every stage of life, as long as factors 
                like iron, calcium, vitamin D and omega-3 fatty acid intake remain monitored.</p>

            <p>Beyond individual health benefits, we emphasized the global good of reducing animal product consumption — further cementing plant dining 
            as a sustainable, informed choice rather than a fad diet or weight-loss strategy.</p>

            <p>Finally, understanding students live busy lives filled with challenging classes and 
                extracurriculars, we make plant-based nutrition manageable — suggesting students plan meals 
                and snacks ahead of time to make body-friendly eating a little more manageable.  </p>
        </div>

    </section>
    );
}

export default Overview;