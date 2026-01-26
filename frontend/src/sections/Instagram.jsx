import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaComment, FaExternalLinkAlt, FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Instagram() {
  // Replace with your Instagram username
  const instagramUsername = "_titu_sharma";
  const instagramUrl = `https://www.instagram.com/${instagramUsername}`;

  // Mock posts - replace with your actual content
  // type: "image" or "video"
  const posts = [
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      likes: 245,
      comments: 12,
    },
    {
      id: 2,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
      likes: 189,
      comments: 8,
    },
    {
      id: 3,
      type: "image",
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      likes: 320,
      comments: 15,
    },
    {
      id: 4,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      likes: 276,
      comments: 21,
    },
    {
      id: 5,
      type: "image",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      likes: 412,
      comments: 19,
    },
    {
      id: 6,
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop",
      likes: 198,
      comments: 9,
    },
  ];

  return (
    <section
      id="instagram"
      className="relative w-full min-h-screen bg-[#0a0a0a] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r opacity-10 from-purple-600 via-pink-600 to-orange-500 blur-3xl rounded-full top-1/3 right-1/4" />
        <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r opacity-5 from-blue-600 to-purple-600 blur-3xl rounded-full bottom-1/4 left-1/4" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 sm:mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent px-4">
            Follow My Journey
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
            Behind the code, beyond the screen — glimpses of life, creativity & tech.
          </p>
        </motion.div>

        {/* Instagram Profile Button */}
        <motion.a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
        >
          <FaInstagram className="text-xl sm:text-2xl" />
          <span>@{instagramUsername}</span>
          <FaExternalLinkAlt className="text-xs sm:text-sm" />
        </motion.a>
      </div>

      {/* Instagram Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {posts.map((post, i) => (
            <InstagramPost key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm sm:text-base text-gray-300 hover:text-white hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <span>View More on Instagram</span>
            <FaExternalLinkAlt className="text-xs sm:text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function InstagramPost({ post, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoClick = (e) => {
    if (post.type === "video" && isHovered) {
      e.stopPropagation();
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: isMobile ? 1 : 1.05 }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={() => {
        if (isMobile) {
          setIsHovered(!isHovered);
          if (!isHovered) {
            setIsMuted(true); // Start muted on mobile
          }
        }
      }}
      className="group relative aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Media Content */}
      {post.type === "image" ? (
        <img
          src={post.src}
          alt={`Instagram post ${post.id}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {/* Video Thumbnail */}
          <img
            src={post.thumbnail}
            alt={`Video thumbnail ${post.id}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Video (only loads when hovered/clicked) */}
          {isHovered && (
            <video
              src={post.src}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              autoPlay
              onClick={handleVideoClick}
            />
          )}
          
          {/* Play Icon Indicator */}
          {!isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center">
                <FaPlay className="text-lg sm:text-xl md:text-2xl text-purple-600 ml-0.5 sm:ml-1" />
              </div>
            </div>
          )}
          
          {/* Volume Control Button - Shows when video is playing */}
          {isHovered && (
            <button
              onClick={handleVideoClick}
              className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200"
            >
              {isMuted ? (
                <FaVolumeMute className="text-sm sm:text-base" />
              ) : (
                <FaVolumeUp className="text-sm sm:text-base" />
              )}
            </button>
          )}
        </>
      )}

      {/* Overlay on hover/click */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent transition-opacity duration-300 flex flex-col items-center justify-center gap-3 sm:gap-4 ${
        isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}>
        <div className="flex items-center gap-4 sm:gap-6 text-white">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <FaHeart className="text-base sm:text-lg md:text-xl" />
            <span className="font-semibold text-sm sm:text-base">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <FaComment className="text-base sm:text-lg md:text-xl" />
            <span className="font-semibold text-sm sm:text-base">{post.comments}</span>
          </div>
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-pink-500/50 transition-all duration-300" />
    </motion.div>
  );
}