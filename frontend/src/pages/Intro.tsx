
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, X, Settings, Edit, Award, Leaf, MapPin, ChevronRight, Heart, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Intro = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [userExp, setUserExp] = useState(320);
  const [userLevel, setUserLevel] = useState(3);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Calculate XP progress
  const xpForNextLevel = 500;
  const xpProgress = (userExp / xpForNextLevel) * 100;

  const cards = [
    {
      id: "game",
      title: "Game",
      image: "/lovable-uploads/08b57b0d-2382-4f3a-8b1a-5f174a1eb5c0.png",
      delay: 0.2,
      path: "/game-intro",
      description: "Test your knowledge with interactive quests"
    },
    {
      id: "garden",
      title: "Garden",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      delay: 0.4,
      path: "/garden",
      description: "Explore plants across different seasons"
    },
    {
      id: "geo-garden",
      title: "Geo-Garden",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      delay: 0.6,
      path: "/geo-garden",
      description: "Discover medicinal plants by region"
    },
  ];

  const characters = [
    {
      id: "botanist",
      name: "Dr. Isha Sharma",
      role: "Botanist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      description: "Expert in rare medicinal plants with a focus on conservation.",
      specialAbility: "Plant Identification: Identify plants 30% faster",
      stats: {
        knowledge: 85,
        exploration: 65,
        harvesting: 70
      }
    },
    {
      id: "herbalist",
      name: "Ravi Kumar",
      role: "Herbalist",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      description: "Traditional medicine practitioner specializing in Ayurvedic remedies.",
      specialAbility: "Herbal Knowledge: +25% effect from collected plants",
      stats: {
        knowledge: 75,
        exploration: 60,
        harvesting: 90
      }
    },
    {
      id: "explorer",
      name: "Maya Patel",
      role: "Explorer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "Plant explorer who discovers rare species in remote regions.",
      specialAbility: "Pathfinder: Discover hidden areas in expeditions",
      stats: {
        knowledge: 65,
        exploration: 95,
        harvesting: 60
      }
    },
    {
      id: "gardener",
      name: "Arjun Singh",
      role: "Master Gardener",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Experienced in cultivating medicinal gardens across diverse climates.",
      specialAbility: "Green Thumb: 40% faster plant growing time",
      stats: {
        knowledge: 70,
        exploration: 55,
        harvesting: 85
      }
    }
  ];

  const achievements = [
    { 
      title: "Plant Collector", 
      progress: 7, 
      total: 10, 
      completed: false,
      icon: <Leaf size={16} className="text-green-400" />
    },
    { 
      title: "Quest Master", 
      progress: 12, 
      total: 20, 
      completed: false,
      icon: <Award size={16} className="text-green-400" />
    },
    { 
      title: "Region Explorer", 
      progress: 3, 
      total: 4, 
      completed: false,
      icon: <MapPin size={16} className="text-green-400" />
    },
    { 
      title: "Knowledge Seeker", 
      progress: 15, 
      total: 15, 
      completed: true,
      icon: <BookOpen size={16} className="text-green-400" />
    },
  ];

  const plantsCollected = [
    {
      name: "Tulsi",
      rarity: "Common",
      count: 5
    },
    {
      name: "Aloe Vera",
      rarity: "Common",
      count: 3
    },
    {
      name: "Ashwagandha",
      rarity: "Uncommon",
      count: 2
    },
    {
      name: "Brahmi",
      rarity: "Rare",
      count: 1
    }
  ];

  useEffect(() => {
    // Auto-select first character if none selected
    if (!selectedCharacter && characters.length > 0) {
      setSelectedCharacter(characters[0].id);
    }
  }, []);

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowSettings(false);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
    setShowProfile(false);
  };

  const handleSelectCharacter = (characterId: string) => {
    setSelectedCharacter(characterId);
    toast({
      title: "Character Selected",
      description: "Your character has been updated successfully",
    });
  };

  const handleEditName = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The ability to edit your name will be available in the next update",
    });
  };

  // Get the selected character data
  const activeCharacter = selectedCharacter 
    ? characters.find(c => c.id === selectedCharacter) 
    : characters[0];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <button 
            onClick={handleSettingsClick}
            className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
          >
            <Settings size={20} className="text-green-400" />
          </button>
          <button 
            onClick={handleProfileClick}
            className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
          >
            {activeCharacter && (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green-400">
                <img 
                  src={activeCharacter.image} 
                  alt={activeCharacter.name}
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            <span>{activeCharacter ? activeCharacter.name : "Select Profile"}</span>
          </button>
        </div>

        <div className="relative flex flex-col items-center justify-center w-full max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-12 text-center">
            Medicinal Plant <span className="text-green-400">Explorer</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.6 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(card.path)}
              >
                <div className="overflow-hidden rounded-3xl aspect-[3/4] relative">
                  {card.id === "game" ? (
                    <img 
                      src="/lovable-uploads/08b57b0d-2382-4f3a-8b1a-5f174a1eb5c0.png" 
                      alt="Game mode" 
                      className="w-full h-full object-cover brightness-[0.85] transition-all duration-500 group-hover:brightness-100 group-hover:scale-110"
                    />
                  ) : card.id === "garden" ? (
                    <img 
                      src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae" 
                      alt="Garden mode" 
                      className="w-full h-full object-cover brightness-[0.85] transition-all duration-500 group-hover:brightness-100 group-hover:scale-110"
                    />
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1588392382834-a891154bca4d" 
                      alt="Geo-Garden mode" 
                      className="w-full h-full object-cover brightness-[0.85] transition-all duration-500 group-hover:brightness-100 group-hover:scale-110"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                  
                  {/* Glowing border when hovered */}
                  <div className={`absolute inset-0 border-2 border-transparent rounded-3xl transition-all duration-500 ${
                    hoveredCard === card.id ? 'border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)]' : ''
                  }`}></div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                    <h3 className={`text-2xl font-bold font-playfair transition-all duration-300 ${
                      hoveredCard === card.id ? 'text-green-400' : 'text-white'
                    }`}>
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      {card.description}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredCard === card.id ? 1 : 0, 
                        y: hoveredCard === card.id ? 0 : 10 
                      }}
                      className="mt-4 inline-flex items-center gap-1 text-green-400 font-medium"
                    >
                      <span>Explore</span>
                      <ChevronRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Profile Dashboard */}
        <AnimatePresence>
          {showProfile && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-2xl"
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                <div className="relative p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-playfair font-bold text-white">Player Profile</h2>
                    <button 
                      onClick={() => setShowProfile(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white/80 hover:text-white"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Character Info */}
                    <div className="glass-card p-6 rounded-xl">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-400 mb-4">
                          <img 
                            src={activeCharacter?.image} 
                            alt={activeCharacter?.name}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-medium text-white text-center">
                            {activeCharacter?.name}
                          </h3>
                          <button onClick={handleEditName} className="text-green-400 hover:text-green-300">
                            <Edit size={16} />
                          </button>
                        </div>
                        
                        <p className="text-green-400 text-sm mb-4">{activeCharacter?.role}</p>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-white/80 text-sm">Level {userLevel}</span>
                          <span className="px-2 py-0.5 bg-green-500/20 rounded-full text-green-400 text-xs">
                            {userExp}/{xpForNextLevel} XP
                          </span>
                        </div>
                        
                        <div className="w-full h-2 bg-white/10 rounded-full mb-6">
                          <div 
                            className="h-full bg-green-500 rounded-full" 
                            style={{ width: `${xpProgress}%` }}
                          ></div>
                        </div>
                        
                        <div className="text-white/90 text-sm mb-6">
                          {activeCharacter?.description}
                        </div>
                        
                        <div className="p-3 bg-green-500/20 rounded-lg w-full mb-6">
                          <div className="flex items-center gap-2 mb-1">
                            <Heart size={16} className="text-green-400" />
                            <p className="text-green-300 font-medium text-sm">Special Ability</p>
                          </div>
                          <p className="text-white/90 text-sm">
                            {activeCharacter?.specialAbility}
                          </p>
                        </div>
                        
                        <div className="w-full space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/80">Knowledge</span>
                              <span className="text-white">{activeCharacter?.stats.knowledge}%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full">
                              <div 
                                className="h-full bg-blue-500 rounded-full" 
                                style={{ width: `${activeCharacter?.stats.knowledge}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/80">Exploration</span>
                              <span className="text-white">{activeCharacter?.stats.exploration}%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full">
                              <div 
                                className="h-full bg-purple-500 rounded-full" 
                                style={{ width: `${activeCharacter?.stats.exploration}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/80">Harvesting</span>
                              <span className="text-white">{activeCharacter?.stats.harvesting}%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full">
                              <div 
                                className="h-full bg-green-500 rounded-full" 
                                style={{ width: `${activeCharacter?.stats.harvesting}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Middle Column - Achievements & Stats */}
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className="text-xl font-medium text-white mb-4">Achievements</h3>
                      
                      <div className="space-y-4 mb-6">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="bg-white/10 rounded-lg p-3">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                achievement.completed ? "bg-green-500/20" : "bg-black/30"
                              }`}>
                                {achievement.icon}
                              </div>
                              <div>
                                <p className="text-white font-medium text-sm">{achievement.title}</p>
                                <p className="text-white/70 text-xs">
                                  Progress: {achievement.progress}/{achievement.total}
                                </p>
                              </div>
                              {achievement.completed && (
                                <Award className="text-green-400 ml-auto" size={18} />
                              )}
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full">
                              <div 
                                className={`h-full rounded-full ${achievement.completed ? "bg-green-500" : "bg-green-700"}`}
                                style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-medium text-white mb-4">Game Stats</h3>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <p className="text-white/70 text-xs">Quests Completed</p>
                          <p className="text-white text-xl font-medium">12</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <p className="text-white/70 text-xs">Plants Collected</p>
                          <p className="text-white text-xl font-medium">11</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <p className="text-white/70 text-xs">Regions Explored</p>
                          <p className="text-white text-xl font-medium">3/4</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <p className="text-white/70 text-xs">Knowledge Points</p>
                          <p className="text-white text-xl font-medium">320</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Plants & Character Selection */}
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className="text-xl font-medium text-white mb-4">Plants Collection</h3>
                      
                      <div className="space-y-3 mb-6 max-h-40 overflow-y-auto pr-2">
                        {plantsCollected.map((plant, index) => (
                          <div key={index} className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Leaf className="text-green-400" size={16} />
                              </div>
                              <div>
                                <p className="text-white text-sm font-medium">{plant.name}</p>
                                <p className={`text-xs ${
                                  plant.rarity === "Common" ? "text-white/70" :
                                  plant.rarity === "Uncommon" ? "text-blue-400" : "text-purple-400"
                                }`}>
                                  {plant.rarity}
                                </p>
                              </div>
                            </div>
                            <div className="bg-black/30 px-2 py-0.5 rounded-full text-white/80 text-xs">
                              x{plant.count}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-medium text-white mb-4">Change Character</h3>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {characters.map((character) => (
                          <div 
                            key={character.id}
                            className={`bg-white/10 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/20 ${
                              selectedCharacter === character.id ? 'border border-green-400' : ''
                            }`}
                            onClick={() => handleSelectCharacter(character.id)}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img 
                                  src={character.image} 
                                  alt={character.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-white text-sm font-medium">{character.name}</p>
                                <p className="text-green-400 text-xs">{character.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Settings Modal */}
        <AnimatePresence>
          {showSettings && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center relative w-full max-w-md rounded-2xl"
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                <div className="relative p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-playfair font-bold text-white">Settings</h2>
                    <button 
                      onClick={() => setShowSettings(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white/80 hover:text-white"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Sound Effects</span>
                        <div className="w-12 h-6 bg-green-500 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Background Music</span>
                        <div className="w-12 h-6 bg-green-500 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Notifications</span>
                        <div className="w-12 h-6 bg-white/30 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4 rounded-xl">
                      <span className="text-white block mb-2">Text Size</span>
                      <div className="h-2 bg-white/10 rounded-full relative">
                        <div className="h-full w-1/2 bg-green-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      onClick={() => setShowSettings(false)}
                      className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors"
                    >
                      Save Settings
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Intro;
