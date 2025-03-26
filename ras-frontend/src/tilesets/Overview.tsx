import React from 'react'
import arrows from "../images/arrows.svg"
import flower from '../images/overview-flower.png'
import img1 from "../images/overview-1.png"
import img2 from "../images/overview-2.png"
import './Overview.css'

function Overview(){
    return (
        <div className="wrapper">
            <section className='overview-section'>
                {/* Image 1 container: appears at the very top */}
                <div className="overview-images">
                    <img src={img1} alt="salad" className="overview-food-1" />
                </div>

                <img
                    src={flower}
                    alt="floral background"
                    className='overview-flower'
                />

                {/* Header with title appears directly below image 1 */}
                <div className='overview-header'>
                    <h2 className='overview-title'>Overview of <br />Cirriculum</h2>
                    <img
                        src={arrows}
                        alt="row of arrows"
                        className='overview-arrows'
                    />
                </div>
                
                {/* Text block with image 2 inserted at the top so that text wraps around it */}
                <div className='overview-info'>
                    <img src={img2} alt="pasta, vegetables, and bread" className="overview-food-2" />
                    <p>Our curriculum emphasizes the accessibility of plant-based food choices. 
                    Using easy-to-understand concepts — like “<b>eating the rainbow</b>” by filling half the 
                    plate with non-starchy vegetables — we strive to make well-balanced diets less 
                    daunting and more achievable for interested diners.</p>

                    <p>Throughout our curriculum, we also remind students <b>how</b> fruits and vegetables can benefit their 
                        health. Diners may be more likely to reach for yellow vegetables if they know their lutein and 
                        zeaxanthin content can protect their eyes from cataracts. Or, they might be quick to add sweet 
                        potatoes to their plate if they remember the orange starch is high in Vitamin A.</p>
                    
                    <div className='no-wrap'>
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
                        and snacks ahead of time to make body-friendly eating a little more manageable.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Overview;
