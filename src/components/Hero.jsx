import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-center z-10">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ragam_orange/20 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ragam_yellow/10 rounded-full blur-[80px] z-0 pointer-events-none mix-blend-screen" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-ragam_yellow font-medium tracking-[0.2em] mb-4 text-sm md:text-base uppercase"
        >
          The Flame Still Burns
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-8xl md:text-[12rem] font-oswald font-bold leading-none text-white tracking-tighter"
        >
          RAGAM <span className="text-ragam_orange">'23</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-white">MARCH</span>
            <span className="text-xl md:text-2xl text-gray-300">10 / 11 / 12</span>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 border-2 border-ragam_orange text-ragam_orange font-bold uppercase tracking-widest hover:bg-ragam_orange hover:text-black transition-all duration-300 rounded-sm"
        >
          Explore Events
        </motion.button>
      </div>
    </section>
  )
}
