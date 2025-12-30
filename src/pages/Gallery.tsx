import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

interface FilterButtonProps {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

const FilterButton = ({ active, children, onClick }: FilterButtonProps) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${active
            ? 'bg-ka-red text-white shadow-lg shadow-red-900/20'
            : 'bg-ka-gray/10 text-ka-gray/70 hover:bg-ka-gray/20'
            }`}
    >
        {children}
    </button>
);

export const Gallery = () => {
    const { products } = useStore();
    const [filter, setFilter] = useState('all');

    const filteredArt = filter === 'all'
        ? products
        : products.filter(art => art.category === filter);

    return (
        <div className="pt-32 pb-20 min-h-screen container mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-display font-bold text-ka-gray mb-6">GALERIE</h1>
                <p className="text-ka-gray/70 max-w-xl mx-auto">Explorez les résonances du chakra à travers nos créations.</p>
            </div>

            {/* Masonry Grid Simulation using CSS columns */}
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                <AnimatePresence>
                    {filteredArt.map((art) => (
                        <motion.div
                            key={art.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer mb-8 shadow-lg"
                        >
                            <Link to={`/product/${art.id}`}>
                                {/* Dynamic Height image */}
                                <img src={art.image} alt={art.title} className="w-full h-auto object-cover" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <h3 className="text-xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {art.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Floating Filters */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 p-2 bg-ka-black/90 backdrop-blur-xl border border-ka-gray/10 rounded-full flex gap-2 shadow-2xl">
                <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>Tous</FilterButton>
                <FilterButton active={filter === 'physical'} onClick={() => setFilter('physical')}>Physique</FilterButton>
                <FilterButton active={filter === 'digital'} onClick={() => setFilter('digital')}>Digital</FilterButton>
            </div>
        </div>
    );
};
