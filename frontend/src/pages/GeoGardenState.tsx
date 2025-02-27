
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const stateData = {
  "tamil-nadu": {
    name: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1516563670759-299070f0dc54",
    climate: "Hot and humid with coastal regions and elevated areas",
    plants: [
      {
        name: "Tulsi (Holy Basil)",
        latin: "Ocimum sanctum",
        image: "https://images.unsplash.com/photo-1593484630664-6187518b1c77",
        description: "Sacred plant with antibacterial, anti-inflammatory properties",
        growingConditions: "Full sun, moderate water, well-draining soil"
      },
      {
        name: "Brahmi",
        latin: "Bacopa monnieri",
        image: "https://images.unsplash.com/photo-1564177426392-e5315e787ee6",
        description: "Memory enhancer, reduces anxiety and stress",
        growingConditions: "Partial shade, moist soil, regular watering"
      }
    ]
  },
  "kerala": {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602310056969-897af7b6d711",
    climate: "Tropical wet with high rainfall and humidity throughout the year",
    plants: [
      {
        name: "Turmeric",
        latin: "Curcuma longa",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
        description: "Anti-inflammatory and antioxidant properties",
        growingConditions: "Partial shade, rich soil, high moisture"
      },
      {
        name: "Ashwagandha",
        latin: "Withania somnifera",
        image: "https://images.unsplash.com/photo-1620658839025-77a7c4d1a278",
        description: "Adaptogen that helps body manage stress",
        growingConditions: "Full sun, dry soil, minimal watering"
      }
    ]
  },
  "karnataka": {
    name: "Karnataka",
    image: "https://images.unsplash.com/photo-1590559899662-cd881db143df",
    climate: "Diverse climate ranging from coastal humidity to highland cool",
    plants: [
      {
        name: "Neem",
        latin: "Azadirachta indica",
        image: "https://images.unsplash.com/photo-1599421498111-ad75406ef06a",
        description: "Natural pesticide and antibacterial properties",
        growingConditions: "Full sun, moderate water, any soil type"
      },
      {
        name: "Aloe Vera",
        latin: "Aloe barbadensis miller",
        image: "https://images.unsplash.com/photo-1596547609099-0612dc987447",
        description: "Skin healing, anti-inflammatory properties",
        growingConditions: "Partial sun, well-draining soil, occasional watering"
      }
    ]
  },
  "maharashtra": {
    name: "Maharashtra",
    image: "https://images.unsplash.com/photo-1531504225839-90f2a810fba4",
    climate: "Tropical with hot, dry summers and mild winters",
    plants: [
      {
        name: "Shatavari",
        latin: "Asparagus racemosus",
        image: "https://images.unsplash.com/photo-1550091254-e076ad6db3b7",
        description: "Female reproductive tonic and natural hormone balancer",
        growingConditions: "Partial shade, rich soil, regular watering"
      },
      {
        name: "Amla",
        latin: "Phyllanthus emblica",
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
        description: "High in Vitamin C, supports immunity and digestion",
        growingConditions: "Full sun, moderate watering, well-draining soil"
      }
    ]
  }
};

const GeoGardenState = () => {
  const navigate = useNavigate();
  const { stateId } = useParams<{ stateId: string }>();
  
  const state = stateId && stateData[stateId as keyof typeof stateData];
  
  if (!state) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">State not found</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${state.image})` }}
        />
        
        <div className="relative z-10 container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/geo-garden")}
            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>Back to States</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl overflow-hidden max-w-4xl mx-auto mb-8"
          >
            <div className="p-6">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                {state.name}
              </h2>
              
              <div className="aspect-video w-full relative rounded-2xl overflow-hidden mb-6">
                <img
                  src={state.image}
                  alt={state.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="bg-white/10 p-4 rounded-xl mb-6 text-white/90">
                <h4 className="font-medium mb-2">Climate:</h4>
                <p>{state.climate}</p>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-4">Native Medicinal Plants</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {state.plants.map((plant) => (
                  <div key={plant.name} className="bg-white/10 rounded-xl overflow-hidden">
                    <div className="aspect-square w-full relative">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-green-400 font-medium mb-1">
                        {plant.name} <span className="text-sm italic">({plant.latin})</span>
                      </h4>
                      <p className="text-white/90 text-sm mb-3">{plant.description}</p>
                      <div className="text-sm bg-black/30 p-2 rounded-lg">
                        <span className="text-green-300 font-medium">Growing conditions:</span> {plant.growingConditions}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GeoGardenState;
