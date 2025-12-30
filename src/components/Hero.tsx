import { motion } from 'framer-motion';
import { CornerBorder } from './decorations/CornerBorder';
import { RedSun } from './decorations/RedSun';

export const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-start justify-center pt-12 md:pt-0">
            {/* Decorations */}
            <CornerBorder position="top-left" />
            <CornerBorder position="top-right" />
            <CornerBorder position="bottom-left" />
            <CornerBorder position="bottom-right" />

            {/* Sun - Z-0 - Perfectly Aligned behind Character */}
            <div className="absolute right-[-5%] md:right-[2%] top-[40%] md:top-[42%] -translate-y-1/2 flex items-center justify-center z-0 scale-90 md:scale-100">
                <RedSun />
            </div>

            {/* Decorative "Three Dots" (Top Center) */}
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 flex gap-3 z-20 opacity-80">
                <div className="w-3 h-3 rounded-full border-2 border-ka-gray"></div>
                <div className="w-3 h-3 rounded-full border-2 border-ka-gray"></div>
                <div className="w-3 h-3 rounded-full border-2 border-ka-gray"></div>
            </div>

            {/* Main Content Grid - Z-10 to stay on top */}
            <div className="relative z-10 w-full h-full container mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-12 pointer-events-none">

                {/* 1. Main Title (Top Left) - Slightly lower for margin */}
                <motion.div
                    className="absolute left-[5%] top-[12%] md:top-[15%] flex flex-col items-start z-20 pointer-events-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="relative flex flex-col items-start gap-2">
                        {/* English Title Horizontal */}
                        <div className="font-display font-black text-ka-gray leading-none tracking-tighter mix-blend-multiply opacity-90 text-6xl md:text-9xl">
                            KUSHINA.<br />ARTS
                        </div>

                        {/* Japanese Title Horizontal */}
                        <div className="text-xl md:text-3xl font-bold text-ka-red tracking-widest">
                            クシナ・アーツ
                        </div>
                    </div>
                </motion.div>


                {/* 2. Character Image (Right Side) */}
                <motion.div
                    className="absolute right-[-15%] md:right-[2%] top-[45%] md:top-[42%] -translate-y-1/2 pointer-events-none z-10 flex items-center justify-center w-full md:w-auto"
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <img
                        src="/new_hero.png"
                        alt="Kushina"
                        className="w-auto h-[60vh] md:h-[85vh] object-contain drop-shadow-2xl"
                        style={{
                            transform: 'translateX(10%)'
                        }}
                    />
                </motion.div>

                {/* 3. About Block (Bottom Left) - Moved Up Significantly */}
                <motion.div
                    className="absolute left-[5%] bottom-[20%] md:bottom-[25%] max-w-[200px] md:max-w-xs text-ka-gray z-20 text-left pointer-events-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-ka-red mb-2">About</h2>
                    <p className="text-sm md:text-base font-medium leading-relaxed">
                        Une fusion entre la tradition japonaise et l'énergie brute du Seinen moderne.
                    </p>
                    <p className="mt-2 text-xs opacity-60 font-bold tracking-widest uppercase">Est. 2024 - Konoha</p>
                </motion.div>

            </div>


            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ka-black via-ka-black/80 to-transparent z-10 pointer-events-none" />
        </div>
    );
};
