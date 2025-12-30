import { useState, useEffect } from 'react';
import { LayoutDashboard, ImageIcon, Settings, Trash2, Save } from 'lucide-react';
import { useStore, type Product } from '../context/StoreContext';

export const Admin = () => {
    const { products, addProduct, deleteProduct, historyContent, updateHistory } = useStore();
    const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'history'>('dashboard');

    // History State
    const [localHistory, setLocalHistory] = useState(historyContent);
    const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

    // Product State
    const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
        title: '',
        category: 'digital',
        price: 0,
        image: '',
        description: ''
    });

    // Update local history when store content changes (initial load)
    useEffect(() => {
        setLocalHistory(historyContent);
    }, [historyContent]);

    const handleAddProduct = () => {
        if (!newProduct.title || !newProduct.image) return alert("Champs manquants");
        addProduct({
            ...newProduct
        });
        setNewProduct({
            title: '',
            category: 'digital',
            price: 0,
            image: '',
            description: ''
        });
        alert("Produit ajouté !");
    };

    const handleSaveHistory = () => {
        updateHistory(localHistory);
        setShowSaveConfirmation(true);
        setTimeout(() => setShowSaveConfirmation(false), 2000);
    };

    return (
        <div className="flex min-h-screen pt-20">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-ka-gray/10 p-6 hidden md:block shadow-sm">
                <h2 className="text-xl font-display font-bold text-ka-gray mb-8">Admin</h2>
                <div className="space-y-4">
                    <SidebarItem icon={LayoutDashboard} label="Tableau de bord" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                    <SidebarItem icon={ImageIcon} label="Catalogue" active={activeTab === 'products'} onClick={() => setActiveTab('products')} />
                    <SidebarItem icon={Settings} label="Mon Histoire" active={activeTab === 'history'} onClick={() => setActiveTab('history')} />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 bg-ka-black">
                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatsCard title="Ventes Totales" value="124,50 €" />
                        <StatsCard title="Commandes" value="12" />
                        <StatsCard title="Produits" value={products.length.toString()} />
                    </div>
                )}

                {activeTab === 'products' && (
                    <div className="space-y-8">
                        <div className="bg-white/50 backdrop-blur-sm border border-ka-gray/10 p-6 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-bold text-ka-gray mb-6">Ajouter un produit</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    placeholder="Titre"
                                    className="bg-white border border-ka-gray/20 rounded-lg p-3 text-ka-gray focus:border-ka-red outline-none"
                                    value={newProduct.title}
                                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                                />
                                <input
                                    placeholder="Prix"
                                    type="number"
                                    className="bg-white border border-ka-gray/20 rounded-lg p-3 text-ka-gray focus:border-ka-red outline-none"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                                />
                                <select
                                    className="bg-white border border-ka-gray/20 rounded-lg p-3 text-ka-gray focus:border-ka-red outline-none"
                                    value={newProduct.category}
                                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as 'digital' | 'physical' | 'print' })}
                                >
                                    <option value="digital">Digital</option>
                                    <option value="physical">Physique</option>
                                    <option value="print">Print</option>
                                </select>
                                <input
                                    placeholder="URL Image"
                                    className="bg-white border border-ka-gray/20 rounded-lg p-3 text-ka-gray focus:border-ka-red outline-none"
                                    value={newProduct.image}
                                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                />
                            </div>
                            <textarea
                                placeholder="Description"
                                className="w-full bg-white border border-ka-gray/20 rounded-lg p-3 text-ka-gray focus:border-ka-red outline-none mb-4 h-24"
                                value={newProduct.description}
                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            />
                            <button
                                onClick={handleAddProduct}
                                className="bg-ka-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
                            >
                                Ajouter au catalogue
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white/50 backdrop-blur-sm border border-ka-gray/10 rounded-xl overflow-hidden group shadow-sm">
                                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-ka-gray">{product.title}</h3>
                                            <span className="text-ka-red font-bold">{product.price} €</span>
                                        </div>
                                        <p className="text-sm text-ka-gray/60 mb-4 line-clamp-2">{product.description}</p>
                                        <button
                                            onClick={() => deleteProduct(product.id)}
                                            className="flex items-center gap-2 text-red-500 text-sm hover:text-red-400"
                                        >
                                            <Trash2 size={16} /> Supprimer
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="bg-white/50 backdrop-blur-sm border border-ka-gray/10 p-6 rounded-2xl shadow-sm h-full flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-ka-gray">Modifier "Mon Histoire"</h2>
                            {showSaveConfirmation && (
                                <span className="text-green-500 text-sm font-bold animate-pulse">Sauvegardé !</span>
                            )}
                        </div>
                        <textarea
                            className="w-full flex-1 bg-white border border-ka-gray/20 rounded-lg p-6 text-ka-gray focus:border-ka-red outline-none resize-none font-sans leading-relaxed text-lg shadow-inner"
                            value={localHistory}
                            onChange={(e) => setLocalHistory(e.target.value)}
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleSaveHistory}
                                className="flex items-center gap-2 bg-ka-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
                            >
                                <Save size={20} /> Enregistrer
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Subcomponents with typed props
interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    active: boolean;
    onClick: () => void;
}

const StatsCard = ({ title, value }: { title: string, value: string }) => (
    <div className="bg-white/50 backdrop-blur-sm border border-ka-gray/10 p-6 rounded-xl shadow-sm">
        <h3 className="text-ka-gray/60 text-sm uppercase tracking-wider mb-2">{title}</h3>
        <p className="text-3xl font-bold text-ka-gray">{value}</p>
    </div>
);

const SidebarItem = ({ icon: Icon, label, active, onClick }: SidebarItemProps) => (
    <div
        onClick={onClick}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-ka-red/10 text-ka-red' : 'text-ka-gray/60 hover:text-ka-gray hover:bg-ka-gray/5'
            }`}
    >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
    </div>
);
