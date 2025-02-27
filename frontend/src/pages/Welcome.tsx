
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <div className="relative h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-green-400 text-glow tracking-wide">
            Flora
            <br />
            Fusion
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-inter max-w-md mx-auto leading-relaxed">
            Explore the World of Medicinal Plants Like Never Before...
          </p>

          <button
            onClick={() => navigate("/intro")}
            className="mt-8 px-8 py-3 bg-green-500/20 hover:bg-green-500/30 text-white font-inter font-medium rounded-full
              border border-green-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg
              hover:shadow-green-500/20"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
