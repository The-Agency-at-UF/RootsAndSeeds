import React from 'react';
import image1 from "./MarketingInnovation-1.png";
import image2 from "./MarketingInnovation-2.png";
import menu from "./TheMenu.svg";
import items from "./MenuItems.png";
import left from "./LeftArrow.svg";
import right from "./RightArrow.svg";

function Program() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center m-5">
                    <div className="flex flex-row">
                    <img className="mr-5" src ={left}/>
                    <h1 className="text-[#BE790B] font-lilita text-7xl whitespace-nowrap text-center">
                        Program Content
                    </h1>
                    <img className="ml-5" src = {right}/>
                    </div>
                    <img className="mt-5 max-w-full" src={menu} />
                </div>
                <div className="flex flex-col justify-center items-center m-5">
                    <div className="flex flex-row">
                    <img className="mr-5" src = {left}/>
                    <h1 className="text-[#BE790B] font-lilita text-7xl whitespace-nowrap text-center">
                        Menu Items
                    </h1>
                    <img className="ml-5" src = {right}/>
                    </div>
                    <img className="mt-5 max-w-full" src={items} />
                </div>
            </div>
        </>
    );
}

export default Program;
