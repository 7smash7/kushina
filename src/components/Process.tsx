import { Zap, PenTool, Stamp } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    delay?: number;
}

const ProcessCard = ({ icon: Icon, title, description, delay = 0 }: ProcessCardProps) => (
    <motion.div
        className="border border-ka-gray/10 p-8 rounded-2xl hover:border-ka-gray/30 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
    >
        <div className="w-12 h-12 bg-ka-red/20 text-ka-red rounded-lg flex items-center justify-center mb-6">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-display font-bold text-ka-gray mb-3">{title}</h3>
        <p className="text-ka-gray/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export const Process = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold text-ka-gray mb-16 text-center">NOTRE PROCESSUS</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProcessCard
                        icon={Zap}
                        title="L'Inspiration"
                        description="Analyse profonde de votre univers et de votre identité visuelle pour canaliser l'énergie créative."
                    />
                    <ProcessCard
                        icon={PenTool}
                        title="Le Tracé"
                        description="Création du croquis structurel et validation des flux de chakra avant l'encrage final."
                        delay={0.1}
                    />
                    <ProcessCard
                        icon={Stamp}
                        title="Le Sceau"
                        description="Finalisation haute définition et livraison des assets physiques ou digitaux prêts à l'emploi."
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};
