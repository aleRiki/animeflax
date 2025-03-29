const ButoonBuscra = () => {
    return ( <div className="relative flex items-center max-w-md mx-auto mt-8">
        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar anime..."
          className="w-full py-4 pl-12 pr-6 transition-all duration-300 border-2 rounded-full text-slate-200 bg-slate-700/80 border-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-900/50 backdrop-blur-sm"
        />
        
        {/* Icono de lupa */}
        <svg 
          className="absolute w-6 h-6 left-4 text-slate-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      
        {/* Botón de búsqueda */}
        <button
          className="absolute flex items-center justify-center px-6 py-2 transition-all duration-300 border rounded-full shadow-md right-2 bg-gradient-to-r from-blue-900 to-slate-700 text-slate-100 border-slate-500 hover:from-blue-800 hover:to-slate-600 hover:shadow-blue-900/40 active:scale-95"
        >
          Buscar
          <svg 
            className="w-4 h-4 ml-2 text-blue-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div> );
}
 
export default ButoonBuscra;