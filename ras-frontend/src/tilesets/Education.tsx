import React from 'react'
import image1 from "./FloridaFreshDining.png";
import tl from "./Top-Left.png";
import tr from "./Top-Right.png";
import br from "./Bottom-Right.png";
import bl from "./Bottom-Left.png";

function Education(){
    return (<>
        <div className="wrapper bg-[#C4DB96] flex flex-col md:flex-row justify-around"> 
            <div className="bg-[#53683F] flex flex-col items-center justify-center p-8">
                <img className="w-auto" src={image1}/>
            </div>
            <div className="bg-[#C4DB96] flex flex-col justify-around m-5">
            <h1 className="text-[#BE790B] font-lilita text-5xl"> Educational Materials </h1>
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
        <div className="wrapper font-inter flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row"> 
                <img className="w-auto" src={tl}/>
                <img className="w-auto" src={tr}/>
                {/* Green section */}
                <div className="flex flex-col w-1/5 bg-[#53683F] justify-end pb-3">
                <div className="w-[97%] h-full ml-auto flex justify-around flex-col bg-[#C4DB96] ml-3">
                    <div className="ml-3">
                    <p> 
                    <span className="font-bold"> Top Left </span>
                    <p>
                    Scaling down environmental impacts
                    to a single burger helps students 
                    understand how their own food choices 
                    can make a difference.
                    </p>
                    </p>
                    <p>

                    <span className="font-bold"> Top Right </span>
                    <p>
                    Even a plant-based diet can’t include 
                    produce alone. Our build-a-plate also 
                    emphasizes whole grains and proteins.
                    </p>
                    </p>

                    <p>
                    <span className="font-bold"> Bottom Left </span>
                    <p>

                    Anticipating some students might shy 
                    away from plant-based eating for 
                    nutrition concerns, we debunked those 
                    concerns head-on.
                    </p>
                    </p>
                    <p>
                    <span className="font-bold"> Bottom Right </span>
                    <p>

                    Even while emphasizing plant diets can 
                    be nutritious ones, we also acknowledged 
                    supplements can be incorporated, based 
                    on the person.
                    </p>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <img className="w-auto" src={bl}/>
                <img className="w-auto" src={br}/>
            </div> 
        </div>
    </>);
}

export default Education;