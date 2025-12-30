import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="border-t border-ka-red/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="font-display font-bold text-2xl text-white mb-4">KUSHINA ARTS</h3>
                        <p className="text-gray-400 max-w-sm">
                            L'art du Seinen Mature. Créations uniques inspirées par l'ardeur du clan Uzumaki.
                            Tableaux physiques et assets digitaux pour créateurs exigeants.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Navigation</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#gallery" className="hover:text-ka-red transition-colors">Galerie</a></li>
                            <li><a href="#commissions" className="hover:text-ka-red transition-colors">Commissions</a></li>
                            <li><a href="#about" className="hover:text-ka-red transition-colors">À Propos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Suivez-moi</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-ka-red transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-ka-red transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-ka-red transition-colors"><Youtube size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-ka-red transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>&copy; 2025 Kushina Arts. Tous droits réservés.</p>
                    <p>Design par Antigravity.</p>
                </div>
            </div>
        </footer>
    );
};
