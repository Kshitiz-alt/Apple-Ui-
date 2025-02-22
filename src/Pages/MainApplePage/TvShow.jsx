import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TvData } from "./Props";

const TvShow = () => {
  const ref = useRef(null);

  const scroll = (direction) => {
    if (ref.current) {
      const scrollAmount = 1150; // Adjust scrolling distance
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full px-8 top-[-25em]">
      {/* Left Scroll Button */}
      <button 
        onClick={() => scroll("left")} 
        className="absolute left-0 z-10 p-3 bg-black/50 rounded-full top-1/2 -translate-y-1/2">
        <ChevronLeft size={32} className="text-white" />
      </button>

      {/* Scrollable Image Container */}
      <div 
        ref={ref} 
        className="flex gap-[1em] overflow-x-scroll Scroll scroll-smooth space-x-6 scrollbar-hide p-4">
        {TvData.map((data) => (
          <div key={data.id} className="relative min-w-[1100px]">
            <img 
              className="w-full rounded-lg shadow-lg" 
              src={data.img} 
              alt={`TV Show ${data.id}`}
            />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button 
        onClick={() => scroll("right")} 
        className="absolute right-0 z-10 p-3 bg-black/50 rounded-full top-1/2 -translate-y-1/2">
        <ChevronRight size={32} className="text-white" />
      </button>
    </div>
  );
};

export default TvShow;
