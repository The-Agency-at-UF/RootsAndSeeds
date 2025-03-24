import React from 'react'
import image1 from "./MarketingInnovation-1.png";
import image2 from "./MarketingInnovation-2.png";

function Program(){
    return (<>
        <div className="bg-[#C4DB96] flex flex-col md:flex-row justify-around"> 
            <div className="bg-[#53683F] flex flex-col items-center justify-center p-8">
                <img className="w-auto" src={image1}/>
                <img className="w-auto" src={image2}/>
            </div>
            <div className="bg-[#C4DB96] flex flex-col justify-around m-5">
            <h1 className="text-[#BE790B] font-lilita text-5xl"> Marketing & Advertising </h1>
            <p className="font-inter"> We tailored marketing strategies to our Gen Z students by utilizing social media — especially Instagram, which a majority of young adults use daily — both leading up 
            to and during the trial. </p>
            <p className="font-inter">
            But we also took advantage of our physical presence on campus. Most students 
            walk past at least one of our dining halls daily. We strategically displayed eye-
            catching posters and flyers near those high-traffic locations, letting students know exactly what would be on the menu for each day. 
            </p>
            In doing so, we appealed to the wider student body — keying all students, not just those with social media accounts, into the opportunity.
            <h1 className="font-bold text-2xl"> 
            Flyers & Posters
            </h1>
            <p> 
            Florida Fresh Dining advertised the Plant-Forward Trial through posters and flyers posted around campus, several displayed near popular dining spots. <span className="font-bold"> About 38% of attendees surveyed said they discovered the event after seeing a flyer or poster. </span>
            </p>

            <h1 className="font-bold text-2xl"> 
            Weekly Menu
            </h1>
            <p>
            By displaying the planned menu for each day, we let interested students arrive on 
            the day when the dishes looked most appealing to their own palette, rather than 
            going in blind.
            </p>
            </div>
        </div>
    </>);
}

export default Program;