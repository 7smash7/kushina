import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
    const { cart, removeFromCart, clearCart } = useStore();

    const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Sidebar */}
                    <motion.div
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl flex flex-col z-50 overflow-hidden"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        {/* Header */}
                        <div className="p-6 flex items-center justify-between border-b border-ka-gray/10 bg-white z-10">
                            <h2 className="text-2xl font-display font-bold text-ka-gray">PANIER ({cart.length})</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-ka-gray/5 rounded-full transition-colors text-ka-gray"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-ka-gray/50 gap-4">
                                    <p className="text-lg">Votre panier est vide.</p>
                                    <button
                                        onClick={onClose}
                                        className="text-ka-red font-bold hover:underline"
                                    >
                                        Retourner à la boutique
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.cartId}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex gap-4 p-4 bg-ka-gray/5 rounded-xl border border-ka-gray/10 group hover:border-ka-red/20 transition-colors"
                                    >
                                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow-sm flex-shrink-0">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-ka-gray leading-tight mb-1">{item.title}</h3>
                                                <p className="text-xs text-ka-gray/60 uppercase tracking-wider font-bold">{item.category}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <span className="text-lg font-bold text-ka-red">{item.price} €</span>
                                                <button
                                                    onClick={() => removeFromCart(item.cartId)}
                                                    className="p-2 text-ka-gray/40 hover:text-ka-red hover:bg-ka-red/10 rounded-full transition-all"
                                                    title="Retirer du panier"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-ka-gray/10 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-10">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-ka-gray/60 font-medium">Total (TTC)</span>
                                <span className="text-3xl font-display font-bold text-ka-gray">{total} €</span>
                            </div>
                            <button
                                onClick={() => {
                                    clearCart();
                                    alert("Commande simulée avec succès ! Merci de votre visite.");
                                    onClose();
                                }}
                                disabled={cart.length === 0}
                                className="w-full bg-ka-red text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-ka-red/20"
                            >
                                Passer la commande
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
