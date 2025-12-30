import { useStore } from '../context/StoreContext';
import { motion } from 'framer-motion';

export const History = () => {
    const { historyContent } = useStore();

    return (
        <div className="pt-32 pb-20 min-h-screen container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-display font-bold text-white mb-12 text-center">MON HISTOIRE</h1>

                <motion.div
                    className="prose prose-invert prose-lg mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="whitespace-pre-wrap leading-relaxed border-l-4 border-ka-red pl-6">
                        {historyContent}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
