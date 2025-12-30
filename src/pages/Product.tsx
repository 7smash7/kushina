import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Product = () => {
    const { id } = useParams();
    const { products, addToCart } = useStore();
    const product = products.find(p => p.id === Number(id));

    const [selectedVariant, setSelectedVariant] = useState<'digital' | 'print' | 'physical'>('digital');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) return <div className="text-ka-gray text-center mt-20">Produit non trouvé</div>;

    const images = [product.image, product.image, product.image]; // Mock multiple images

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left: Gallery */}
                <div className="space-y-6">
                    <motion.div
                        className="aspect-square bg-ka-gray/5 rounded-2xl overflow-hidden relative border border-ka-gray/10 group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Video Overlay Mockup */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                                <Play fill="currentColor" size={24} />
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>

                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${currentImageIndex === idx ? 'border-ka-red' : 'border-transparent opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Info */}
                <div className="pt-8">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-ka-gray mb-6 uppercase leading-none">{product.title}</h1>
                        <p className="text-ka-gray/80 leading-relaxed mb-12 text-lg">{product.description}</p>

                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-ka-gray/60 uppercase tracking-wider mb-4">Format</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {(['digital', 'print', 'physical'] as const).map((variant) => (
                                    <button
                                        key={variant}
                                        onClick={() => setSelectedVariant(variant)}
                                        className={`py-3 rounded-lg text-sm font-bold uppercase transition-all ${selectedVariant === variant
                                            ? 'bg-ka-gray text-white'
                                            : 'bg-white border border-ka-gray/20 text-ka-gray hover:border-ka-gray/50'
                                            }`}
                                    >
                                        {variant}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 p-8 bg-white/50 border border-ka-gray/10 rounded-2xl backdrop-blur-sm shadow-sm">
                            <div className="h-px bg-ka-gray/10" />

                            <div className="flex items-end justify-between">
                                <span className="text-3xl font-bold text-ka-red">{product.price} €</span>
                                <span className="text-sm text-ka-gray/60 font-medium">TVA incluse</span>
                            </div>

                            <button
                                onClick={() => addToCart(product)}
                                className="w-full bg-ka-red text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-3 group"
                            >
                                <ShoppingBag className="group-hover:scale-110 transition-transform" />
                                Ajouter au panier
                            </button>
                        </div>

                        <div className="mt-8 text-sm text-ka-gray/50">
                            <p>Livraison estimée : Immédiate (Digital) / 3-5 jours (Physique)</p>
                            <p className="mt-2">Garantie satisfaction Kushina Arts.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
