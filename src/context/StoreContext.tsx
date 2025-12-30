/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface Product {
    id: number;
    title: string;
    category: 'digital' | 'physical' | 'print';
    price: number;
    image: string;
    description: string;
}

export interface CartItem extends Product {
    cartId: string; // Unique ID for cart item incase of duplicates if needed later
}

interface StoreContextType {
    products: Product[];
    cart: CartItem[];
    historyContent: string;
    addProduct: (product: Omit<Product, 'id'>) => void;
    deleteProduct: (id: number) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (cartId: string) => void;
    updateHistory: (content: string) => void;
    clearCart: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Initial Mock Data
const INITIAL_PRODUCTS: Product[] = [
    { id: 1, title: 'Habanero', category: 'digital', price: 45, image: '/hero.png', description: "Une illustration digitale capturant l'énergie ardente de Kushina." },
    { id: 2, title: 'Kyūbi Seal', category: 'physical', price: 120, image: '/hero.png', description: "Tableau physique représentant le sceau maudit en détails dorés." },
    { id: 3, title: 'Uzumaki Chains', category: 'digital', price: 60, image: '/hero.png', description: "Art conceptuel des chaînes de chakra." },
    { id: 4, title: 'Konoha Night', category: 'physical', price: 200, image: '/hero.png', description: "Peinture nocturne du village caché." },
    { id: 5, title: 'Minato Legacy', category: 'digital', price: 55, image: '/hero.png', description: "Hommage digital à l'éclair jaune." },
    { id: 6, title: 'Red Thread', category: 'physical', price: 150, image: '/hero.png', description: "Toile symbolisant le lien du destin." },
];

const INITIAL_HISTORY = "L'histoire de Kushina Arts commence dans la passion du trait et de la couleur. Inspiré par les légendes ninjas et l'esthétique sombre du Seinen, chaque œuvre est une tentative de capturer une émotion brute. C'est un voyage entre tradition et modernité, où le pinceau rencontre la tablette graphique pour forger des univers uniques.";

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(() => {
        const saved = localStorage.getItem('ka_products');
        return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    });

    const [cart, setCart] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem('ka_cart');
        return saved ? JSON.parse(saved) : [];
    });

    const [historyContent, setHistoryContent] = useState<string>(() => {
        const saved = localStorage.getItem('ka_history');
        return saved ? saved : INITIAL_HISTORY;
    });

    // Persistence
    useEffect(() => {
        localStorage.setItem('ka_products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('ka_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('ka_history', historyContent);
    }, [historyContent]);

    // Actions
    const addProduct = (product: Omit<Product, 'id'>) => {
        const newProduct = { ...product, id: Date.now() };
        setProducts(prev => [newProduct, ...prev]);
    };

    const deleteProduct = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const addToCart = (product: Product) => {
        const newItem = { ...product, cartId: Math.random().toString(36).substr(2, 9) };
        setCart(prev => [...prev, newItem]);
    };

    const removeFromCart = (cartId: string) => {
        setCart(prev => prev.filter(item => item.cartId !== cartId));
    };

    const clearCart = () => {
        setCart([]);
    }

    const updateHistory = (content: string) => {
        setHistoryContent(content);
    };

    return (
        <StoreContext.Provider value={{
            products,
            cart,
            historyContent,
            addProduct,
            deleteProduct,
            addToCart,
            removeFromCart,
            updateHistory,
            clearCart
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};
