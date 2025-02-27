
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GameIntro = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 min-h-screen flex flex-col p-6">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate("/intro")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>Home</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto space-y-6 glass-card p-8 rounded-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Embark on an Adventure
            </h1>
            <p className="text-xl text-white/90 mb-6">
              to Discover the Secrets of Nature and Heritage
            </p>
            <button
              onClick={() => navigate("/game")}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full
                transition-all duration-300 hover:scale-105"
            >
              Let the Game Begin!
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GameIntro;
