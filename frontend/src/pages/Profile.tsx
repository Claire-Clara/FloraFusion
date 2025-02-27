
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Leaf, BookOpen, MapPin } from "lucide-react";

const achievementsList = [
  {
    id: "achievement-1",
    title: "Plant Collector",
    description: "Collected 10 different medicinal plants",
    icon: <Leaf className="text-green-400" size={20} />,
    completed: true
  },
  {
    id: "achievement-2",
    title: "Region Explorer",
    description: "Explored all four regions of India",
    icon: <MapPin className="text-green-400" size={20} />,
    completed: false
  },
  {
    id: "achievement-3",
    title: "Botanist Apprentice",
    description: "Completed all quests in Summer season",
    icon: <BookOpen className="text-green-400" size={20} />,
    completed: true
  },
  {
    id: "achievement-4",
    title: "Herbal Master",
    description: "Identified 20 plants correctly",
    icon: <Award className="text-green-400" size={20} />,
    completed: false
  }
];

const Profile = () => {
  const navigate = useNavigate();
  
  // Mock character data - in a real app would come from state management or API
  const character = {
    name: "Dr. Isha Sharma",
    role: "Botanist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    level: 5,
    plantsCollected: 28,
    questsCompleted: 12,
    bio: "Specializing in the study of medicinal plants across India, with a particular focus on sustainable harvesting methods and traditional knowledge preservation."
  };

  // Progress calculation
  const progressPercent = (achievementsList.filter(a => a.completed).length / achievementsList.length) * 100;

  return (
    <div className="min-h-screen bg-black">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473773508845-188df298d2d1')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/intro")}
            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>Home</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-3xl overflow-hidden h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-400">
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-playfair font-bold text-white text-center mb-1">
                    {character.name}
                  </h2>
                  <p className="text-green-400 text-center mb-4">{character.role}</p>
                  
                  <div className="bg-white/10 rounded-xl p-4 mb-4">
                    <p className="text-white/90 text-sm">{character.bio}</p>
                  </div>
                  
                  <div className="mt-auto space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Level</span>
                      <span className="text-white font-medium">{character.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Plants Collected</span>
                      <span className="text-white font-medium">{character.plantsCollected}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Quests Completed</span>
                      <span className="text-white font-medium">{character.questsCompleted}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Achievements */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-3xl overflow-hidden h-full"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-playfair font-bold text-white mb-6">
                    Achievements
                  </h2>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Progress</span>
                      <span className="text-white">{Math.round(progressPercent)}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full" 
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {achievementsList.map((achievement) => (
                      <div 
                        key={achievement.id}
                        className={`p-4 rounded-xl flex items-center gap-4 ${
                          achievement.completed 
                            ? "bg-green-500/20 border border-green-500/50" 
                            : "bg-white/10"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.completed ? "bg-green-500/20" : "bg-black/30"
                        }`}>
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white">
                            {achievement.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.completed && (
                          <Award size={20} className="text-green-400 ml-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
