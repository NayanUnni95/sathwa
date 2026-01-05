import { motion } from 'framer-motion'

export default function Marquee() {
    const marqueeVariants = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                },
            },
        },
    }

    const items = [
        'JUBIN NAUTIYAL',
        'AMIT TRIVEDI',
        'NEETI MOHAN',
        'RAGAM NIGHTS',
        'PRO SHOW',
        'CULTURAL FEST',
    ]

    return (
        <div className="relative w-full py-16 bg-ragam_black overflow-hidden border-y border-white/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex items-center gap-16"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {[...items, ...items, ...items].map((item, index) => (
                        <span
                            key={index}
                            className="text-6xl md:text-8xl font-oswald font-bold text-transparent transition-colors duration-300 hover:text-white cursor-default"
                            style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
