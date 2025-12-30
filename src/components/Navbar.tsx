import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Cart } from './Cart';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useStore();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Galerie', href: '/gallery' },
        { name: 'Commissions', href: '/commissions' },
        { name: 'Mon Histoire', href: '/history' },
        { name: 'Admin', href: '/admin' },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? 'bg-ka-black/90 backdrop-blur-md border-b border-ka-red/10'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-2xl font-display font-bold text-ka-gray tracking-widest hover:text-ka-red transition-colors"
                    >
                        {/* Logo hidden on hero usually but shown here for nav utility, or maybe just 'KA' */}
                        KA.
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm uppercase tracking-wider text-ka-gray hover:text-ka-red transition-colors relative group font-bold"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ka-red transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <button
                            className="text-ka-gray hover:text-ka-red transition-colors relative"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingCart size={24} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-ka-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            className="text-ka-gray hover:text-ka-red transition-colors relative"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingCart size={24} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-ka-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                        <button
                            className="text-ka-gray"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-30 bg-ka-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-2xl font-display font-bold text-white hover:text-ka-red transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cart Sidebar */}
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};
