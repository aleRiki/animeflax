"use client";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface ButtonBuscarProps {
  onSearch: (searchTerm: string) => void;
}

const ButtonBuscar = ({ onSearch }: ButtonBuscarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center max-w-md mx-auto mt-8"
    >
      <div className="relative flex-grow">
        <FiSearch
          className="absolute transform -translate-y-1/2 left-4 top-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar anime por nombre..."
          className="w-full py-3 pl-12 pr-24 transition-all duration-300 border-2 rounded-full text-slate-200 bg-slate-700/80 border-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-900/50 backdrop-blur-sm"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              onSearch("");
            }}
            className="absolute transform -translate-y-1/2 right-20 top-1/2 text-slate-400 hover:text-slate-300"
          >
            <FiX size={18} />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="absolute flex items-center justify-center px-4 py-2 transition-all duration-300 rounded-full shadow right-2 text-slate-100 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 active:scale-95"
      >
        Buscar
      </button>
    </form>
  );
};

export default ButtonBuscar;
