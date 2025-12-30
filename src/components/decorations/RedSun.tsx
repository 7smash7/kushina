import { motion } from 'framer-motion';

export const RedSun = () => {
    return (
        <motion.div
            className="flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2 }}
        >
            <svg
                width="600"
                height="600"
                viewBox="0 0 600 600"
                className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-90"
            >
                <defs>
                    <filter id="paper-texture" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise" />
                        <feDiffuseLighting in="noise" lightingColor="#F9F4EF" surfaceScale="1">
                            <feDistantLight azimuth="45" elevation="60" />
                        </feDiffuseLighting>
                        <feComposite operator="in" in2="SourceGraphic" result="composite" />
                        <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                    </filter>
                </defs>
                <circle
                    cx="300"
                    cy="300"
                    r="300"
                    fill="#C62222"
                    filter="url(#paper-texture)"
                />
            </svg>
        </motion.div>
    );
};
