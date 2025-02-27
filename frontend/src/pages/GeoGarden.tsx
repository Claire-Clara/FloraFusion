
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const indiaStates = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1516563670759-299070f0dc54",
    description: "Known for its rich cultural heritage and temple architecture"
  },
  {
    id: "kerala",
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602310056969-897af7b6d711",
    description: "Home to lush backwaters and ayurvedic traditions"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    image: "https://images.unsplash.com/photo-1590559899662-cd881db143df",
    description: "Features diverse landscapes from coastal to highland regions"
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    image: "https://images.unsplash.com/photo-1531504225839-90f2a810fba4",
    description: "Rich in medicinal plant biodiversity and traditional knowledge"
  }
];

const GeoGarden = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561891615-2c0802ad6066')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/intro")}
            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>Home</span>
          </button>

          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8 text-center">
            Geo Garden India
          </h1>
          
          <p className="text-white/90 text-lg max-w-2xl mx-auto text-center mb-12">
            Explore medicinal plants native to different regions of India and learn how to grow them in your own garden.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {indiaStates.map((state, index) => (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => navigate(`/geo-garden/${state.id}`)}
              >
                <div className="relative aspect-video w-full">
                  <img
                    src={state.image}
                    alt={state.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {state.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {state.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoGarden;
