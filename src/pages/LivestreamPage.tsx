import React, { useState, useEffect, useRef } from 'react';
import styles from './LivestreamPage.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/hooks/use-toast';
import { 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Send, 
  Gift, 
  Coins,
  Play,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Share2
} from 'lucide-react';

// Mock data for packages
const PACKAGES = [
  {
    id: 1,
    name: "Spawn Creeper",
    description: "Summon a Creeper into the streamer's game!",
    cost: 50,
    icon: "💥",
    metadata: { action: "spawn_creeper" },
    color: "from-green-600 to-green-800"
  },
  {
    id: 2,
    name: "Rain Diamonds",
    description: "Make it rain diamonds in the game!",
    cost: 100,
    icon: "💎",
    metadata: { action: "rain_diamonds", amount: 5 },
    color: "from-cyan-600 to-blue-800"
  },
  {
    id: 3,
    name: "Zombie Horde",
    description: "Summon a horde of zombies!",
    cost: 75,
    icon: "🧟",
    metadata: { action: "spawn_zombie_horde", count: 10 },
    color: "from-emerald-700 to-green-900"
  },
  {
    id: 4,
    name: "Lightning Strike",
    description: "Strike lightning at a random location!",
    cost: 150,
    icon: "⚡",
    metadata: { action: "lightning_strike" },
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 5,
    name: "Ender Dragon",
    description: "Summon the Ender Dragon! Super powerful!",
    cost: 500,
    icon: "🐉",
    metadata: { action: "spawn_ender_dragon" },
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 6,
    name: "Golden Apple",
    description: "Give a Golden Apple to the streamer",
    cost: 30,
    icon: "🍎",
    metadata: { action: "give_golden_apple" },
    color: "from-yellow-600 to-amber-700"
  },
  {
    id: 7,
    name: "TNT Explosion",
    description: "Place TNT that explodes at streamer's location!",
    cost: 80,
    icon: "💣",
    metadata: { action: "tnt_explosion", radius: 5 },
    color: "from-red-600 to-red-800"
  },
  {
    id: 8,
    name: "Nether Portal",
    description: "Open a random Nether portal",
    cost: 120,
    icon: "🌀",
    metadata: { action: "create_portal" },
    color: "from-purple-700 to-indigo-900"
  }
];

// Mock data for chat messages
const INITIAL_CHAT_MESSAGES = [
  {
    id: 1,
    username: "MinecraftPro123",
    avatar: "/placeholder.svg",
    message: "Hello everyone! Great stream!",
    timestamp: new Date(Date.now() - 300000),
    isSubscriber: true,
    coins: 0
  },
  {
    id: 2,
    username: "DiamondHunter",
    avatar: "/placeholder.svg",
    message: "What map is the streamer playing today?",
    timestamp: new Date(Date.now() - 240000),
    isSubscriber: false,
    coins: 0
  },
  {
    id: 3,
    username: "CreeperKiller",
    avatar: "/placeholder.svg",
    message: "Spawn Creeper! 💥",
    timestamp: new Date(Date.now() - 180000),
    isSubscriber: true,
    coins: 50,
    package: "Spawn Creeper"
  },
  {
    id: 4,
    username: "EnderFan",
    avatar: "/placeholder.svg",
    message: "Anyone buying Ender Dragon? 🐉",
    timestamp: new Date(Date.now() - 120000),
    isSubscriber: true,
    coins: 0
  },
  {
    id: 5,
    username: "BlockMaster",
    avatar: "/placeholder.svg",
    message: "Rain Diamonds for the streamer! 💎",
    timestamp: new Date(Date.now() - 60000),
    isSubscriber: true,
    coins: 100,
    package: "Rain Diamonds"
  }
];

// Mock data cho viewer info
const MOCK_VIEWER = {
  username: "YourUsername",
  avatar: "/placeholder.svg",
  coins: 500,
  isLoggedIn: false,
  isSubscriber: false
};

// Mock streamer info
const STREAMER_INFO = {
  username: "MinecraftMaster",
  title: "🎮 Building a Giant Castle - Minecraft Survival #15",
  description: "Today I'll continue building the castle and exploring new caves! Support me with packages!",
  avatar: "/placeholder.svg",
  viewers: 1247,
  likes: 3421,
  followers: 15600,
  category: "Minecraft Survival",
  tags: ["Minecraft", "Survival", "Building", "Gaming"]
};

interface ChatMessage {
  id: number;
  username: string;
  avatar: string;
  message: string;
  timestamp: Date;
  isSubscriber: boolean;
  coins?: number;
  package?: string;
}

const confettiColors = ['#ffe259', '#ffa751', '#00ffb2', '#1e293b', '#fff', '#00e1ff', '#ffb347'];

function Confetti({ trigger }) {
  const [pieces, setPieces] = useState([]);
  useEffect(() => {
    if (trigger) {
      const arr = Array.from({ length: 32 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.7,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotate: Math.random() * 360,
        size: 8 + Math.random() * 12
      }));
      setPieces(arr);
      const t = setTimeout(() => setPieces([]), 1200);
      return () => clearTimeout(t);
    }
  }, [trigger]);
  if (!pieces.length) return null;
  return (
    <div className={styles.confetti}>
      {pieces.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${p.left}%`,
          top: 0,
          width: p.size,
          height: p.size * 2,
          background: p.color,
          borderRadius: 2,
          transform: `rotate(${p.rotate}deg)`,
          opacity: 0.85,
          animation: `confettiDrop 1.1s ${p.delay}s cubic-bezier(.68,-0.55,.27,1.55) forwards`
        }} />
      ))}
      <style>{`
        @keyframes confettiDrop {
          0% { top: 0; opacity: 0.7; }
          80% { opacity: 1; }
          100% { top: 90vh; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const LivestreamPage = () => {
  const navigate = useNavigate();
  const [viewer, setViewer] = useState(MOCK_VIEWER);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [chatInput, setChatInput] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [eventFeed, setEventFeed] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Simulate random chat messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessages = [
        "Wow amazing build!",
        "Thả Creeper đi! 😂",
        "Stream hay quá ạ!",
        "Bạn chơi giỏi quá!",
        "Có thể chơi với mình không?",
        "Tuyệt vời! 🔥"
      ];
      
      const randomUsernames = [
        "Player" + Math.floor(Math.random() * 1000),
        "Gamer" + Math.floor(Math.random() * 1000),
        "MinecraftFan" + Math.floor(Math.random() * 1000)
      ];

      if (Math.random() > 0.7) { // 30% chance to add a message
        const newMessage: ChatMessage = {
          id: Date.now(),
          username: randomUsernames[Math.floor(Math.random() * randomUsernames.length)],
          avatar: "/placeholder.svg",
          message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
          timestamp: new Date(),
          isSubscriber: Math.random() > 0.5,
          coins: 0
        };
        
        setChatMessages(prev => [...prev.slice(-50), newMessage]); // Keep last 50 messages
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    // Mock login
    setViewer({
      ...viewer,
      isLoggedIn: true,
      username: "YourUsername" + Math.floor(Math.random() * 1000)
    });
    toast({
      title: "Login successful!",
      description: "You are now logged into the system.",
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    if (!viewer.isLoggedIn) {
      toast({
        title: "Please log in",
        description: "You need to log in to send messages.",
        variant: "destructive"
      });
      return;
    }

    const newMessage: ChatMessage = {
      id: Date.now(),
      username: viewer.username,
      avatar: viewer.avatar,
      message: chatInput,
      timestamp: new Date(),
      isSubscriber: viewer.isSubscriber,
      coins: 0
    };

    setChatMessages(prev => [...prev, newMessage]);
    setChatInput('');
  };

  const handleBuyPackage = (pkg: typeof PACKAGES[0]) => {
    if (!viewer.isLoggedIn) {
      toast({
        title: "Please log in",
        description: "You need to log in to buy packages.",
        variant: "destructive"
      });
      return;
    }

    if (viewer.coins < pkg.cost) {
      toast({
        title: "Insufficient coins",
        description: `You need ${pkg.cost} coins to buy this package. You currently have ${viewer.coins} coins.`,
        variant: "destructive"
      });
      return;
    }

    // Deduct coins
    setViewer(prev => ({
      ...prev,
      coins: prev.coins - pkg.cost
    }));

    // Add donation message to chat
    const donationMessage: ChatMessage = {
      id: Date.now(),
      username: viewer.username,
      avatar: viewer.avatar,
      message: `${pkg.icon} gifted ${pkg.name}!`,
      timestamp: new Date(),
      isSubscriber: viewer.isSubscriber,
      coins: pkg.cost,
      package: pkg.name
    };

    setChatMessages(prev => [...prev, donationMessage]);

    // Add to event feed
    setEventFeed(feed => [
      { id: Date.now(), text: `${viewer.username} sent ${pkg.icon} ${pkg.name} (${pkg.cost} coins)` },
      ...feed.slice(0, 3)
    ]);

    setConfettiTrigger(t => t + 1);

    toast({
      title: "Package purchased!",
      description: `You bought "${pkg.name}" for ${pkg.cost} coins!`,
    });

    setSelectedPackage(null);
  };

  const handleLike = () => {
    toast({
      title: "Liked the stream!",
      description: "Thanks for your support!",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Stream link has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-minecraft-black minecraft-dirt-bg relative overflow-x-hidden">
      <div className={styles['wow-bg']} />
      <Confetti trigger={confettiTrigger} />
      {/* Event Feed */}
      <div className={styles['event-feed']}>
        {eventFeed.map(ev => (
          <div key={ev.id} className={styles['event-item']}>
            {ev.text}
          </div>
        ))}
      </div>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player & Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <Card className={"bg-minecraft-darkGray border-4 border-minecraft-brown overflow-hidden " + styles['glow-border']}>
              <div className="relative aspect-video bg-black">
                {/* Mock Video Player */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-950 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Play className="w-24 h-24 text-white/80 mx-auto" />
                    <p className="text-white/60 text-sm">Mock Livestream Player</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-red-500 font-bold">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Player Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20"
                        onClick={() => setIsMuted(!isMuted)}
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </Button>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-bold">{STREAMER_INFO.viewers.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Settings className="w-5 h-5" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-white hover:bg-white/20"
                        onClick={() => setIsFullscreen(!isFullscreen)}
                      >
                        <Maximize className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stream Info */}
            <Card className="bg-minecraft-darkGray border-4 border-minecraft-brown">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-2xl text-white font-minecraft">
                      {STREAMER_INFO.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {STREAMER_INFO.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {STREAMER_INFO.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-minecraft-brown text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-minecraft-brown">
                      <AvatarImage src={STREAMER_INFO.avatar} />
                      <AvatarFallback className="bg-minecraft-brown text-white">
                        {STREAMER_INFO.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-white">{STREAMER_INFO.username}</p>
                      <p className="text-sm text-gray-400">{STREAMER_INFO.followers.toLocaleString()} followers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-minecraft-brown text-white hover:bg-minecraft-brown"
                      onClick={handleLike}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      {STREAMER_INFO.likes.toLocaleString()}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-minecraft-brown text-white hover:bg-minecraft-brown"
                      onClick={handleShare}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packages Section */}
            <Card className="bg-minecraft-darkGray border-4 border-minecraft-brown">
              <CardHeader>
                <CardTitle className="text-white font-minecraft flex items-center gap-2">
                  <Gift className="w-6 h-6" />
                  Packages - Support Streamer
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Buy packages to interact with the streamer's game!
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!viewer.isLoggedIn && (
                  <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded p-4 mb-4">
                    <p className="text-yellow-200 text-sm mb-2">
                      You need to log in to buy packages and give gifts to the streamer!
                    </p>
                    <Button
                      size="sm"
                      className="bg-minecraft-green hover:bg-minecraft-green/80"
                      onClick={handleLogin}
                    >
                      Log in now
                    </Button>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PACKAGES.map((pkg) => (
                    <Card
                      key={pkg.id}
                      className={`relative overflow-hidden cursor-pointer transition-all hover:scale-105 border-4 ${
                        selectedPackage === pkg.id
                          ? 'border-yellow-400 shadow-lg shadow-yellow-400/50'
                          : 'border-minecraft-brown'
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-20`} />
                      <CardHeader className="relative">
                        <div className="flex items-center justify-between">
                          <span className="text-4xl">{pkg.icon}</span>
                          <Badge className="bg-yellow-600 text-white font-bold">
                            <Coins className="w-3 h-3 mr-1" />
                            {pkg.cost}
                          </Badge>
                        </div>
                        <CardTitle className="text-white font-minecraft text-lg">
                          {pkg.name}
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-sm">
                          {pkg.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <Button
                          className="w-full bg-minecraft-green hover:bg-minecraft-green/80"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBuyPackage(pkg);
                          }}
                          disabled={!viewer.isLoggedIn || viewer.coins < pkg.cost}
                        >
                          <Gift className="w-4 h-4 mr-2" />
                          Buy Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat & Sidebar */}
          <div className="space-y-4">
            {/* User Info */}
            {viewer.isLoggedIn ? (
              <Card className="bg-minecraft-darkGray border-4 border-minecraft-brown relative">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-minecraft-brown">
                      <AvatarImage src={viewer.avatar} />
                      <AvatarFallback className="bg-minecraft-brown text-white">
                        {viewer.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-bold text-white">{viewer.username}</p>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Coins className={styles['coin-float'] + " w-4 h-4"} />
                        <span className={styles['coin-float'] + " font-bold text-lg drop-shadow-lg"}>{viewer.coins}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ) : (
              <Card className="bg-minecraft-darkGray border-4 border-minecraft-brown">
                <CardHeader>
                  <CardTitle className="text-white font-minecraft text-center">
                    Log In
                  </CardTitle>
                  <CardDescription className="text-center text-gray-300">
                    Log in to chat and give gifts!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-minecraft-green hover:bg-minecraft-green/80"
                    onClick={handleLogin}
                  >
                    Log in now
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Chat Box */}
            <Card className="bg-minecraft-darkGray border-4 border-minecraft-brown">
              <CardHeader>
                <CardTitle className="text-white font-minecraft flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Chat Messages */}
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-3">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="space-y-1">
                        <div className="flex items-start gap-2">
                          <Avatar className="w-8 h-8 border border-minecraft-brown">
                            <AvatarImage src={msg.avatar} />
                            <AvatarFallback className="bg-minecraft-brown text-white text-xs">
                              {msg.username.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-white text-sm truncate">
                                {msg.username}
                              </span>
                              {msg.isSubscriber && (
                                <Badge variant="secondary" className="text-xs bg-purple-600 text-white">
                                  SUB
                                </Badge>
                              )}
                              <span className="text-xs text-gray-400">
                                {msg.timestamp.toLocaleTimeString('vi-VN', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </span>
                            </div>
                            {msg.coins ? (
                              <div className={styles['donation-highlight'] + " bg-gradient-to-r from-yellow-600 to-orange-600 rounded p-2 border-2 border-yellow-400"}>
                                <div className="flex items-center gap-2 mb-1">
                                  <Gift className="w-4 h-4 text-white" />
                                  <span className="font-bold text-white text-sm">
                                    Donated {msg.coins} coins
                                  </span>
                                </div>
                                <p className="text-white text-sm">{msg.message}</p>
                              </div>
                            ) : (
                              <p className="text-gray-300 text-sm break-words">
                                {msg.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                </ScrollArea>

                {/* Chat Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder={viewer.isLoggedIn ? "Type a message..." : "Log in to chat..."}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={!viewer.isLoggedIn}
                    className="bg-minecraft-black border-minecraft-brown text-white placeholder:text-gray-500"
                  />
                  <Button
                    size="icon"
                    className="bg-minecraft-green hover:bg-minecraft-green/80"
                    onClick={handleSendMessage}
                    disabled={!viewer.isLoggedIn || !chatInput.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LivestreamPage;
