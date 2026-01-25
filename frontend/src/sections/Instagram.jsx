import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaComment, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { useState } from "react";

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
      className="relative w-full min-h-screen bg-[#0a0a0a] py-20 px-4"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r opacity-10 from-purple-600 via-pink-600 to-orange-500 blur-3xl rounded-full top-1/3 right-1/4" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Follow My Journey
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
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
          className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
        >
          <FaInstagram className="text-2xl" />
          <span>@{instagramUsername}</span>
          <FaExternalLinkAlt className="text-sm" />
        </motion.a>
      </div>

      {/* Instagram Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          className="text-center mt-12"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-gray-300 hover:text-white hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <span>View More on Instagram</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function InstagramPost({ post, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
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
          {/* Video */}
          <video
            src={post.src}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            ref={(el) => {
              if (el) {
                if (isHovered) {
                  el.play().catch(() => {});
                } else {
                  el.pause();
                  el.currentTime = 0;
                }
              }
            }}
          />
          
          {/* Play Icon Indicator (shows when not hovering) */}
          {!isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <FaPlay className="text-2xl text-purple-600 ml-1" />
              </div>
            </div>
          )}
        </>
      )}

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <FaHeart className="text-xl" />
            <span className="font-semibold">{post.likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaComment className="text-xl" />
            <span className="font-semibold">{post.comments}</span>
          </div>
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-pink-500/50 transition-all duration-300" />
    </motion.div>
  );
}