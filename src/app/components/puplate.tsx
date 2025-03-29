"use client";
import { animeData } from "../data";


const Populate = () => {
    return ( 
        <div className="w-full max-w-6xl mt-16">
        <h2 className="text-3xl font-bold text-[#fffffe] mb-8 text-center border-b-4 border-[#ff3864] pb-2 font-[Impact]">
          LOS MÁS POPULARES
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
        {animeData.map((anime) => (
    <div key={anime.id} className="relative transition-all duration-300 transform cursor-pointer group hover:-translate-y-2">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>
      <img 
        src={anime.img} 
        alt={anime.name} 
        className="w-full h-auto rounded-xl border-2 border-[#ff3864]/50 group-hover:border-[#ff3864] transition-all"
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-2">
        <h3 className="text-center font-bold text-white text-lg sm:text-xl group-hover:text-[#ff3864] transition-colors">
          {anime.name}
        </h3>
      </div>
      
      {/* Botón "Ver Anime" */}
      <div className="absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <a 
          href={anime.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 font-bold text-white bg-[#ff3864] rounded-lg hover:bg-[#ff1a50] transition-colors shadow-lg"
          onClick={(e) => {
            if(!anime.url) {
              e.preventDefault();
              alert(`Próximamente: ${anime.name}`);
            }
          }}
        >
          Ver Anime
        </a>
      </div>
    </div>
  ))}
        </div>
      </div>
 
     );
}
 
export default Populate;