import React from 'react'
import image1 from "./FloridaFreshDining.png";
import tl from "./Top-Left.png";
import tr from "./Top-Right.png";
import br from "./Bottom-Right.png";
import bl from "./Bottom-Left.png";
import bg from "./Background.svg"
import arrow from "./EducationArrow.svg"

function Education(){
    return (<>
    <div>
        <div className="max-w-[1440px] mt-16 bg-[#C4DB96] flex flex-row justify-around"> 
            <div className="bg-[#53683F] flex flex-col items-center justify-center p-8">
                <img className="w-auto" src={image1}/>
            </div>
            <div className="bg-[#C4DB96] flex flex-col justify-around m-5">
            <div className="flex flex-row items-end w-full">
            <h1 className="text-[#BE790B] font-lilita text-7xl">Educational <br/> Materials</h1>
            <img className="h-auto mb-4 translate-x-[-40px]" src={arrow} />
            </div>
            <p> Our registered campus dietitian, Syd Watkins, hosted educational tables during the trial to promote the benefits of incorporating plant-based options into a well-balanced diet.</p> 
            <div>
            <p className="font-bold"> The themes of these tables included: </p>
            <ol className="ml-3">
                <li> 1. Truth or Myth: Plant Based Edition </li>
                <li> 2. Benefits of a Plant Based Diet </li>
                <li> 3. Building a Colorful Plate </li>
            </ol>
            </div>
            </div>
        </div>
        <div className="mt-12 font-inter flex flex-col justify-center items-center">
            <div className="flex flex-row"> 
                <img className="w-1/3 " src={tl}/>
                <img className="w-1/3" src={tr}/>
                {/* Green section */}
                <div className="flex flex-col w-1/3 justify-end pb-3">
                <div className="w-[97%] h-full ml-auto flex justify-around flex-col ml-3" style={{ backgroundImage: `url(${bg})`}}>
                    <div className="relative ml-6 mr-6">
                    <p className="mb-6"> 
                    <span className="font-bold"> Top Left </span>
                    </p>
                    <p className="mb-6">
                    Scaling down environmental impacts
                    to a single burger helps students 
                    understand how their own food choices 
                    can make a difference.
                    </p>
                    <p className="mb-6">
                    <span className="font-bold"> Top Right </span>
                    </p>
                    <p className="mb-6">
                    Even a plant-based diet can’t include 
                    produce alone. Our build-a-plate also 
                    emphasizes whole grains and proteins.
                    </p>

                    <p className="mb-6">
                    <span className="font-bold"> Bottom Left </span>
                    </p>
                    <p className="mb-6">
                    Anticipating some students might shy 
                    away from plant-based eating for 
                    nutrition concerns, we debunked those 
                    concerns head-on.
                    </p>
                    <p className="mb-6">
                    <span className="font-bold"> Bottom Right </span>
                    </p>
                    <p className="mb-6">
                    Even while emphasizing plant diets can 
                    be nutritious ones, we also acknowledged 
                    supplements can be incorporated, based 
                    on the person.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <img className="w-1/2" src={bl}/>
                <img className="w-1/2" src={br}/>
            </div> 
        </div>
        </div>
    </>);
}

export default Education;