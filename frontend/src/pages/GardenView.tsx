
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

const seasons = [
  {
    id: "summer",
    title: "Summer",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "Vibrant flowers and lush greenery along stone pathways",
    plants: [
      {
        id: "aloe-vera",
        name: "Aloe Vera",
        latinName: "Aloe barbadensis miller",
        image: "https://images.unsplash.com/photo-1596547609099-0612dc987447",
        description: "A succulent plant species with thick, fleshy leaves that contains a gel-like substance used for medicinal and skincare purposes.",
        position: { top: "30%", left: "40%" }
      },
      {
        id: "snake-plant",
        name: "Snake Plant",
        latinName: "Sansevieria trifasciata",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
        description: "An evergreen perennial plant with stiff, upright leaves that can grow to be several feet tall. It's known for its air-purifying qualities.",
        position: { top: "60%", left: "20%" }
      }
    ]
  },
  {
    id: "rainy",
    title: "Rainy",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    description: "Misty gardens with dewdrops on leaves",
    plants: [
      {
        id: "birds-nest-fern",
        name: "Bird's Nest Fern",
        latinName: "Asplenium nidus",
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
        description: "A tropical plant commonly found in warm, humid environments. It has large, arching leaves that form a rosette-like structure, making it popular as both an ornamental and a medicinal plant in some cultures.",
        position: { top: "45%", left: "70%" }
      },
      {
        id: "peace-lily",
        name: "Peace Lily",
        latinName: "Spathiphyllum wallisii",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7a",
        description: "A flowering plant that thrives in high humidity and indirect light. Its beautiful white flowers and ability to purify air make it a popular houseplant.",
        position: { top: "70%", left: "30%" }
      }
    ]
  },
  {
    id: "autumn",
    title: "Autumn",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    description: "Golden leaves carpet the ground beneath trees",
    plants: [
      {
        id: "chrysanthemum",
        name: "Chrysanthemum",
        latinName: "Chrysanthemum morifolium",
        image: "https://images.unsplash.com/photo-1606041225696-bacf97d2383e",
        description: "Flowering plants native to East Asia and northeastern Europe with various medicinal properties including anti-inflammatory benefits.",
        position: { top: "50%", left: "60%" }
      },
      {
        id: "echinacea",
        name: "Echinacea",
        latinName: "Echinacea purpurea",
        image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
        description: "A flowering plant in the daisy family known for its immune-boosting properties, commonly used to treat or prevent colds and flu.",
        position: { top: "30%", left: "40%" }
      }
    ]
  },
  {
    id: "winter",
    title: "Winter",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "Snow-covered landscape with frozen streams",
    plants: [
      {
        id: "ginseng",
        name: "Ginseng",
        latinName: "Panax ginseng",
        image: "https://images.unsplash.com/photo-1599011496553-d35f53dc6258",
        description: "A slow-growing perennial plant with fleshy roots that is highly valued for its medicinal properties, particularly for improving energy and reducing stress.",
        position: { top: "40%", left: "50%" }
      },
      {
        id: "wintergreen",
        name: "Wintergreen",
        latinName: "Gaultheria procumbens",
        image: "https://images.unsplash.com/photo-1561181286-d5c2c4dadc5a",
        description: "An evergreen shrub with red berries that contains methyl salicylate, used as a natural pain reliever and for treating muscle aches.",
        position: { top: "65%", left: "25%" }
      }
    ]
  },
];

type Plant = {
  id: string;
  name: string;
  latinName: string;
  image: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
};

const GardenView = () => {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If coming from game with a target season, automatically select it
    const targetSeason = location.state?.targetSeason;
    if (targetSeason) {
      setSelectedSeason(targetSeason);
    }
  }, [location.state]);

  const handleSeasonClick = (seasonId: string) => {
    setSelectedSeason(seasonId);
  };

  const handlePlantClick = (plant: Plant) => {
    setSelectedPlant(plant);
  };

  const closePlantDetail = () => {
    setSelectedPlant(null);
  };

  const currentSeasonPlants = selectedSeason 
    ? seasons.find(s => s.id === selectedSeason)?.plants || []
    : [];

  return (
    <div className="min-h-screen bg-black">
      {!selectedSeason ? (
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center opacity-30" />
          
          <div className="relative z-10 container mx-auto px-4 py-12">
            <button
              onClick={() => navigate("/intro")}
              className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Menu</span>
            </button>
            
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-12 text-center">
              Choose Your Season
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {seasons.map((season, index) => (
                <motion.button
                  key={season.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleSeasonClick(season.id)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
                  <img
                    src={season.image}
                    alt={season.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6 text-left">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {season.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {season.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative min-h-screen"
        >
          <img
            src={seasons.find(s => s.id === selectedSeason)?.image}
            alt={selectedSeason}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 p-6">
            <button
              onClick={() => setSelectedSeason(null)}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <ArrowLeft size={20} />
              <span>Choose Another Season</span>
            </button>
            
            {/* Glowing Plants */}
            {currentSeasonPlants.map((plant) => (
              <motion.div
                key={plant.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute cursor-pointer"
                style={{ 
                  top: plant.position.top, 
                  left: plant.position.left,
                }}
                onClick={() => handlePlantClick(plant)}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-[0_0_15px_rgba(74,222,128,0.8)] animate-pulse border-2 border-green-400">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Plant Detail Modal */}
            <AnimatePresence>
              {selectedPlant && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                  <div className="absolute inset-0 bg-black/60" onClick={closePlantDetail} />
                  
                  <motion.div 
                    className="relative w-full max-w-xs bg-[url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb')] bg-cover bg-center rounded-2xl overflow-hidden"
                    style={{ maxHeight: '90vh' }}
                  >
                    <div className="px-6 py-4">
                      <div className="flex justify-between items-center mb-2">
                        <button
                          onClick={closePlantDetail}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-green-400/50 bg-black/30"
                        >
                          <ArrowLeft size={16} className="text-white" />
                        </button>
                        <h2 className="text-xl text-white font-bold">{selectedSeason}</h2>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 my-4">
                        <img
                          src={selectedPlant.image}
                          alt={selectedPlant.name}
                          className="w-full aspect-square object-cover rounded"
                        />
                      </div>
                      
                      <h3 className="text-center font-medium text-white mb-2">Medicinal Plant</h3>
                      
                      <p className="text-green-400 font-medium mb-1">
                        {selectedPlant.name} <span className="italic">({selectedPlant.latinName})</span>
                      </p>
                      
                      <p className="text-white/90 text-sm mb-6">
                        {selectedPlant.description}
                      </p>
                      
                      <button
                        className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full
                          transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <span className="text-green-200">🍀</span>
                        <span>Collect More</span>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GardenView;
