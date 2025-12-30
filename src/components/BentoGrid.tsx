import { motion } from 'framer-motion';

const BentoCard = ({ className, title, delay = 0 }: { className: string, title: string, delay?: number }) => (
    <motion.div
        className={`border border-ka-gray/10 rounded-2xl overflow-hidden group relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Placeholder for Content - Ideally distinct images here */}
        <div className="w-full h-full bg-ka-gray/5 group-hover:scale-105 transition-transform duration-700 ease-out" />

        <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold text-ka-gray font-display mb-1">{title}</h3>
            <div className="h-0.5 w-0 bg-ka-red group-hover:w-full transition-all duration-500 ease-out" />
        </div>
    </motion.div>
)

export const BentoGrid = () => {
    return (
        <section className="py-32 relative">
            {/* Background noise or texture could be added here */}
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-ka-gray mb-4">DERNIÈRES CRÉATIONS</h2>
                    <div className="w-24 h-1 bg-ka-red mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">
                    {/* Large Main Item */}
                    <BentoCard className="md:col-span-2 md:row-span-2" title="L'Éveil du Chakra" />

                    {/* Secondary Items */}
                    <BentoCard className="md:col-span-1 md:row-span-1" title="Sceau Maudit" delay={0.1} />
                    <BentoCard className="md:col-span-1 md:row-span-1" title="Chaînes de Diamantine" delay={0.2} />

                    {/* Bottom Row */}
                    <BentoCard className="md:col-span-1 md:row-span-1" title="Emotes Twitch" delay={0.3} />
                    <BentoCard className="md:col-span-1 md:row-span-1" title="Overlay Custom" delay={0.4} />
                </div>
            </div>
        </section>
    );
};
