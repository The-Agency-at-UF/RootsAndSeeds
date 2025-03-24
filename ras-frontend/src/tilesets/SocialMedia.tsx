import React from 'react'
import mediaArrows from '../images/reverseArrow.svg'
import ig1 from '../images/instagram1.png'
import ig2 from '../images/instagram2.png'
import "./SocialMedia.css"

function SocialMedia(){
    return(
        <div className="wrapper">
            <section className='social-media-section'>
                <div className='media-header'>
                    <img 
                        src={mediaArrows}
                        alt="reverse row of arrows"
                        className='media-arrows'
                    />
                    <h2 className='media-title'>Social Media</h2>
                </div>
                <div className='media-content'>
                    <div className='media-screenshots'>
                        <img
                            src={ig1}
                            alt='screenshot of an instagram post depicting a student serving themselves plant-based mac and cheese'
                            className='ss-1'
                        />
                        <img
                            src={ig2}
                            alt='screenshot of an instagram post introducing plant forward takeover at UF'
                            className='ss-2'
                        />
                    </div>
                    <div className='media-green-text-box'>
                        <p>Florida Fresh Dining @floridafresh.dining has an Instagram following of over <b>5,000</b> and 
                            posted twice about the Plant-Forward event. The first announcement featured 
                            the event’s flyer a week before doors opened. The second went up on the first day 
                            of the trial and featured images of the day’s culinary selection — African chickpea 
                            soup, cauliflower biryani and Tandoori PAOW Tikka — as well as students sitting to 
                            enjoy their plates.</p> 
                        <p>
                            <span className="eighteen">18%</span>
                            <span className="green-bold"><b> of diners surveyed found <br />the trial through</b></span>
                            <span className="yellow-bold"><b> social media.</b></span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SocialMedia;
