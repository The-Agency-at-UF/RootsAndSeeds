import leftarrow from "./LeftArrow.svg";
import qr from "./QR.svg";
import chart from "./Chart.svg";
import plot from "./Plot.svg";

function Feedback(){
    return (<div className="mt-12 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-[1440px] mt-8 ml-8 mr-8"> 
            <div className="w-full h-full flex flex-col space-y-6">
            <div className="flex flex-row justify-end items-end w-full">
            <img className="h-auto mb-4 " src={leftarrow} />
            <h1 className="text-[#BE790B] font-lilita text-7xl"> Feedback & Evaluation </h1>
            </div>
            <div className="flex flex-row">
            <img src={qr}/>
            <div className="flex flex-col items-center justify-around ml-6 mr-6">
            <p className="font-inter text-[#53683F] font-bold"> Florida Fresh Dining focuses on survey feedback to monitor demand and tailor new initiatives to students’ 
            desires and needs. Diners scanned a QR code after leaving Arrendando Café to offer their thoughts on the menu 
            and share their, own opinions on plant-based diets. </p>
            <p className="font-inter">
            We measured the Plant-Forward Trial’s impact based on responses from 97 people — the overwhelming majority of 
            whom enjoyed the experimental menu’s taste and variety.
            </p>
            <p className="font-inter"> 
            Our trial brought many new faces to Arredondo Café. Just under <span className="font-bold"> 40% of respondents said they had never dined 
            there before </span> the takeover, indicating a wider appeal for plant-based dining.
            </p>
            <p className="font-inter">
            <span className="font-bold"> Vegan, plant-based and vegetarian diners made up a little less than half of attendees at 43%. </span> Other top reasons 
            for attending included taste preferences, health reasons and environmental concerns. Knowing a majority of 
            respondents don’t follow a plant-based diet regularly, we conclude many students are curious about incorporating 
            plant-based foods into their diet — even if they don’t already follow that diet regularly.
            </p>
            </div>
            </div>
            <p className="font-inter">
            <span className="font-bold text-[#53683F]"> Over 36% of surveyed diners said they followed a plant-based diet “occasionally,” “rarely” or “never”. </span> Thus, demand for non-animal-based options extends beyond the vegan and vegetarian communities.
            </p>
            <p className="font-inter">
            For those who don’t eat plant-based meals regularly, the takeover made a good first impression. A three-fourths majority of all participants said they would return to dine at Arredondo if they continued with plant-based menu options long term.
            </p>
            <p className="font-inter">
            Repeated adjectives used to describe the meals included “fresh,” “flavorful” and “incredible.” Overall, our initiative introduced participants to less-familiar, but tasty, cuisines — educating them on their benefits while doing so.
            </p>
            <img src = {chart}/>
            <div className="flex flex-row">
            <div className="flex flex-col items-center justify-around"> 
            <p className="font-inter">
            Among individual dishes, Thursday’s pasta stood out as a favorite dish 
            for many — “the impossible bolognese on Thurs was FANTASTIC,” in the words of one respondent. Other repeated adjectives used to describe 
            the meals included “fresh,” “flavorful” and “incredible.”
            </p>
            <p className="font-inter">
            Overall, our initiative introduced participants to less-familiar, but tasty, cuisines — <span className="font-bold"> educating </span> them on their benefits while doing so.
            </p>
            </div>
            <img src = {plot}/>
            </div>
            </div>
        </div>
    </div>);
}

export default Feedback;