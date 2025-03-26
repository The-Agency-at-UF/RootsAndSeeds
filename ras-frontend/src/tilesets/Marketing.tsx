import React from 'react'
import image1 from "./MarketingInnovation-1.png";
import image2 from "./MarketingInnovation-2.png";
import rightarrow from "./EducationArrow.svg";
import pic from "./MarketingPic.svg"

function Marketing(){
    return (<>
        <div className="max-w-[1440px] mt-16 bg-[#C4DB96] flex flex-row justify-around"> 
            <div className="bg-[#53683F] flex flex-col items-center justify-center p-8">
                <img className="h-full" src={image1}/>
                <img className="h-full" src={image2}/>
            </div>
            <div className="w-full h-full bg-[#C4DB96] flex flex-col justify-between space-y-6 m-5">
            <div className="flex flex-row items-end w-full">
            <h1 className="text-[#BE790B] font-lilita text-7xl"> Marketing & <br/> Materials</h1>
            <img className="h-auto mb-4 translate-x-[-70px]" src={rightarrow} />
            </div>
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
        <img className="mt-16 mb-16" src={pic}/>
    </>);
}

export default Marketing;