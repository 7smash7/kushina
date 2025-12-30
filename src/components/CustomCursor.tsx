import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if target is interactive
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.classList.contains('cursor-pointer');

            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] ${isHovering ? 'bg-ka-gold' : 'bg-ka-red'}`}
                style={{
                    translateX: mousePosition.x - 6,
                    translateY: mousePosition.y - 6,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] ring-1 ring-ka-red opacity-50"
                style={{
                    translateX: mousePosition.x - 6,
                    translateY: mousePosition.y - 6,
                }}
                animate={{
                    scale: isHovering ? 3.5 : 1.5,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.05
                }}
            />
        </>
    );
};
