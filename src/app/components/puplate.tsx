"use client";
//import { animeData } from "../data";
import AnimeList from "./animeList";


const Populate = () => {
  
    return ( 
        <div className="w-full max-w-6xl mt-16">
        <h2 className="text-3xl font-bold text-[#fffffe] mb-8 text-center border-b-4 border-[#ff3864] pb-2 font-[Impact]">
          LOS MÁS POPULARES
        </h2>
        <AnimeList/>
      </div>
 
     );
}
 
export default Populate;