
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Leaf, MapPin, Award, BookOpen, Check, X as XIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quests = [
  // Easy Level Quests
  {
    id: "quest-easy-1",
    title: "Tropical Healer",
    hint: "I thrive in tropical warmth, with leaves that arch and curl. I form a cozy rosette nest, in humid places, I unfurl.",
    answer: "bird's nest fern",
    factoid: "Many tropical plants form rosettes to collect water efficiently during rainy seasons.",
    difficulty: "Easy",
    targetSeason: "rainy",
    points: 10
  },
  {
    id: "quest-easy-2",
    title: "Desert Survivor",
    hint: "My thick skin stores water within, in desert heat I never wilt. My healing gel soothes sunburnt skin, in summer gardens I am built.",
    answer: "aloe vera",
    factoid: "Succulent plants have special water-storing tissues that help them survive long periods of drought.",
    difficulty: "Easy",
    targetSeason: "summer",
    points: 10
  },
  {
    id: "quest-easy-3",
    title: "Golden Immune Booster",
    hint: "Golden petals reach for the sky, my roots hold medicine deep. As autumn leaves begin to fly, my healing power you should keep.",
    answer: "echinacea",
    factoid: "Many medicinal plants reach their peak potency in autumn just before they enter dormancy for winter.",
    difficulty: "Easy",
    targetSeason: "autumn",
    points: 10
  },
  {
    id: "quest-easy-4",
    title: "Evergreen Guardian",
    hint: "My leaves stay green when others fall, with red berries that catch the eye. I ease pain both great and small, when winter months are nigh.",
    answer: "wintergreen",
    factoid: "Evergreen plants provide important medicinal sources during winter when other plants are dormant.",
    difficulty: "Easy",
    targetSeason: "winter",
    points: 10
  },
  {
    id: "quest-easy-5",
    title: "Sacred Herb",
    hint: "Aromatic leaves with holy fame, in courtyards grown with care. Both medicine and prayer I claim, my purifying scent fills the air.",
    answer: "tulsi",
    factoid: "Holy Basil (Tulsi) is considered sacred in many cultures and offers numerous health benefits.",
    difficulty: "Easy",
    targetSeason: "summer",
    points: 10
  },
  
  // Medium Level Quests
  {
    id: "quest-medium-1",
    title: "Memory Enhancer",
    hint: "In shallow waters I spread wide, my tiny leaves in clusters form. Mental clarity I provide, to help the mind weather any storm.",
    answer: "brahmi",
    factoid: "Brahmi is known to improve cognitive function and has been used in traditional medicine for thousands of years.",
    difficulty: "Medium",
    targetSeason: "rainy",
    points: 20
  },
  {
    id: "quest-medium-2",
    title: "Spicy Healer",
    hint: "Golden-orange is my inner hue, with a bitter, earthy taste. Inflammation I subdue, in curries I am placed.",
    answer: "turmeric",
    factoid: "Turmeric contains curcumin, a compound with powerful anti-inflammatory and antioxidant properties.",
    difficulty: "Medium",
    targetSeason: "rainy",
    points: 20
  },
  {
    id: "quest-medium-3",
    title: "Stress Manager",
    hint: "My roots hold power to calm and soothe, in arid soils I grow. Stress and anxiety I remove, my effects aren't fast but slow.",
    answer: "ashwagandha",
    factoid: "Ashwagandha is an adaptogen that helps the body respond to stress in a healthy way.",
    difficulty: "Medium",
    targetSeason: "summer",
    points: 20
  },
  {
    id: "quest-medium-4",
    title: "Bitter Protector",
    hint: "Tall and strong with leaves compound, bitter taste but benefits sweet. In gardens across the land I'm found, my seeds and bark make pests retreat.",
    answer: "neem",
    factoid: "Neem has been used for thousands of years for its medicinal properties and natural pesticide capabilities.",
    difficulty: "Medium",
    targetSeason: "summer",
    points: 20
  },
  {
    id: "quest-medium-5",
    title: "Peace Bearer",
    hint: "White flowers rise above green leaves, in shaded corners I reside. The air I cleanse, science believes, peace and purity I provide.",
    answer: "peace lily",
    factoid: "Peace lilies are excellent air purifiers and can absorb harmful toxins from the environment.",
    difficulty: "Medium",
    targetSeason: "rainy",
    points: 20
  },
  
  // Hard Level Quests
  {
    id: "quest-hard-1",
    title: "Energy Root",
    hint: "Beneath the snow my power grows, with twisted roots of ancient fame. In coldest regions where wind blows, energy and vitality I claim.",
    answer: "ginseng",
    factoid: "Some of the most potent adaptogenic herbs like ginseng grow in harsh winter environments and help the body adapt to stress.",
    difficulty: "Hard",
    targetSeason: "winter",
    points: 30
  },
  {
    id: "quest-hard-2",
    title: "Hormone Balancer",
    hint: "Delicate white blooms and twisted vines, my roots strengthen women's health. My name with 'hundred roots' aligns, rejuvenation is my wealth.",
    answer: "shatavari",
    factoid: "Shatavari is considered the queen of herbs in Ayurveda, especially for women's reproductive health.",
    difficulty: "Hard",
    targetSeason: "autumn",
    points: 30
  },
  {
    id: "quest-hard-3",
    title: "Vitamin Powerhouse",
    hint: "Small and round with sour taste, vitamin C in abundance found. No part of me goes to waste, my benefits are profound.",
    answer: "amla",
    factoid: "Amla contains one of the highest natural concentrations of Vitamin C, 20 times more than oranges.",
    difficulty: "Hard",
    targetSeason: "autumn",
    points: 30
  },
  {
    id: "quest-hard-4",
    title: "Flower Medicine",
    hint: "My petals many and bright display, in autumn gardens I'm at my best. Healing teas from my flowers they may, create to help the body rest.",
    answer: "chrysanthemum",
    factoid: "Chrysanthemum tea has been used for centuries as a natural remedy for various health conditions.",
    difficulty: "Hard",
    targetSeason: "autumn",
    points: 30
  },
  {
    id: "quest-hard-5",
    title: "Snake's Medicine",
    hint: "Upright leaves with banded patterns tall, in neglect I still survive. No water needed until leaves fall, in darkness I can thrive.",
    answer: "snake plant",
    factoid: "Snake plants are extremely resilient and can survive in conditions that would kill most other plants.",
    difficulty: "Hard",
    targetSeason: "summer",
    points: 30
  }
];

const Game = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [showQuestSelection, setShowQuestSelection] = useState(true);
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [points, setPoints] = useState(153);
  const [userAnswer, setUserAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState<"correct" | "incorrect" | null>(null);
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard" | null>(null);
  
  // Filter quests based on selected difficulty
  const filteredQuests = difficulty 
    ? quests.filter(q => q.difficulty === difficulty)
    : quests;
  
  const startQuest = (index: number) => {
    setCurrentQuestIndex(index);
    setShowQuestSelection(false);
    setUserAnswer("");
    setAnswerStatus(null);
  };

  const selectDifficulty = (level: "Easy" | "Medium" | "Hard") => {
    setDifficulty(level);
  };

  const checkAnswer = (questId: string, correctAnswer: string) => {
    const normalizedUserAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase();
    
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      setAnswerStatus("correct");
      if (!completedQuests.includes(questId)) {
        const completedQuest = quests.find(q => q.id === questId);
        setCompletedQuests([...completedQuests, questId]);
        setPoints(points + (completedQuest?.points || 0));
        
        toast({
          title: "Correct Answer!",
          description: `You've earned ${completedQuest?.points || 0} points!`,
          variant: "default",
        });
      }
    } else {
      setAnswerStatus("incorrect");
      toast({
        title: "Not quite right",
        description: "Try again or check the garden for clues",
        variant: "destructive",
      });
    }
  };
  
  const currentQuest = filteredQuests[currentQuestIndex];
  
  return (
    <div className="min-h-screen relative bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 min-h-screen flex flex-col p-6">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate("/intro")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>Home</span>
          </button>
          
          <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-green-400">🍀</span>
            <span className="text-white font-medium">{points}</span>
            <span className="text-white/70 text-sm">plants collected</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showQuestSelection ? (
            <motion.div
              key="quest-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center"
            >
              <div className="max-w-2xl w-full glass-card p-8 rounded-3xl text-center">
                <h2 className="text-3xl font-playfair font-bold text-white mb-6">
                  Medicinal Plant Quests
                </h2>
                
                {/* Difficulty Selection */}
                <div className="flex justify-center gap-4 mb-8">
                  {["Easy", "Medium", "Hard"].map((level) => (
                    <button
                      key={level}
                      onClick={() => selectDifficulty(level as "Easy" | "Medium" | "Hard")}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        difficulty === level 
                          ? "bg-green-500 text-white" 
                          : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 gap-4 mb-6 max-h-[360px] overflow-y-auto p-2">
                  {filteredQuests.map((quest, index) => (
                    <button
                      key={quest.id}
                      onClick={() => startQuest(index)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        completedQuests.includes(quest.id)
                          ? "bg-green-500/20 border border-green-500/50"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium text-white">
                          {quest.title}
                        </h3>
                        {completedQuests.includes(quest.id) && (
                          <Award size={18} className="text-green-400" />
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="mt-2 text-xs inline-block px-2 py-1 rounded bg-black/30 text-white/80">
                          {quest.difficulty}
                        </div>
                        <div className="text-green-400 text-sm font-medium">
                          {quest.points} points
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => navigate("/garden")}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2"
                  >
                    <Leaf size={18} />
                    <span>View Garden</span>
                  </button>
                  
                  <button 
                    onClick={() => navigate("/geo-garden")}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2"
                  >
                    <MapPin size={18} />
                    <span>Geo Garden</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="quest-detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center"
            >
              <div className="max-w-lg w-full glass-card p-8 rounded-3xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-playfair font-bold text-white">
                    {currentQuest.title}
                  </h3>
                  <div className="text-xs inline-block px-2 py-1 rounded bg-black/30 text-white/80">
                    {currentQuest.difficulty}
                  </div>
                </div>
                
                <div className="space-y-4 text-white mb-8">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <h4 className="text-lg italic mb-2">Name this medicinal plant:</h4>
                    <p className="text-white/90">{currentQuest.hint}</p>
                  </div>
                  
                  {/* Answer Input */}
                  <div className="mt-6">
                    <div className="relative">
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Type your answer here..."
                        className={`w-full p-3 rounded-lg bg-white/10 text-white border ${
                          answerStatus === "correct" 
                            ? "border-green-500" 
                            : answerStatus === "incorrect" 
                              ? "border-red-500" 
                              : "border-transparent"
                        } focus:outline-none focus:ring-2 focus:ring-green-400`}
                      />
                      
                      {answerStatus && (
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {answerStatus === "correct" ? (
                            <Check size={20} className="text-green-500" />
                          ) : (
                            <XIcon size={20} className="text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => checkAnswer(currentQuest.id, currentQuest.answer)}
                      className="mt-3 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
                    >
                      Check Answer
                    </button>
                  </div>
                  
                  {/* Answer Result */}
                  <AnimatePresence>
                    {answerStatus === "correct" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-green-500/20 p-4 rounded-xl mt-4 border border-green-500/50"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Award size={16} className="text-green-400" />
                          <p className="text-lg font-medium text-green-300">Correct!</p>
                        </div>
                        <p className="text-sm text-white/90">
                          The answer is indeed <span className="font-medium text-green-300">{currentQuest.answer}</span>.
                        </p>
                        <p className="text-sm text-white/90 mt-2">{currentQuest.factoid}</p>
                      </motion.div>
                    )}
                    
                    {answerStatus === "incorrect" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-red-500/20 p-4 rounded-xl mt-4 border border-red-500/50"
                      >
                        <p className="text-sm text-white/90">
                          That's not correct. Try again or visit the garden for clues.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowQuestSelection(true)}
                    className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full
                      transition-all duration-300 flex-1"
                  >
                    Back to Quests
                  </button>
                  
                  <button
                    onClick={() => navigate("/garden", { state: { targetSeason: currentQuest.targetSeason } })}
                    className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full
                      transition-all duration-300 hover:scale-105 flex-1 flex items-center justify-center gap-2"
                  >
                    <Leaf size={16} />
                    <span>Search Garden</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Game;
