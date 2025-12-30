import { Upload } from 'lucide-react';

export const Commissions = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left: Showcase */}
                <div>
                    <h1 className="text-5xl font-display font-bold text-white mb-8">
                        ESPACE <span className="text-ka-red">STREAMERS</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Transformez votre chaîne avec une identité visuelle digne d'un Hokage.
                        Emotes, overlays et alertes forgés sur mesure.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-40 bg-white/5 rounded-xl border border-white/10 p-4 flex items-center justify-center text-gray-500">
                            Showcase Emotes
                        </div>
                        <div className="h-40 bg-white/5 rounded-xl border border-white/10 p-4 flex items-center justify-center text-gray-500">
                            Showcase Badges
                        </div>
                        <div className="col-span-2 h-64 bg-white/5 rounded-xl border border-white/10 p-4 flex items-center justify-center text-gray-500">
                            Overlay Preview
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6">BRIEF DE MISSION</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">NOM DE LA CHAÎNE</label>
                            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-ka-red focus:outline-none transition-colors" placeholder="Ex: DattebayoTV" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2">PLATEFORME</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-ka-red focus:outline-none">
                                    <option>Twitch</option>
                                    <option>YouTube</option>
                                    <option>Kick</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2">BUDGET EST.</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-ka-red focus:outline-none">
                                    <option>100€ - 300€</option>
                                    <option>300€ - 600€</option>
                                    <option>600€ +</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">DESCRIPTION DU PROJET</label>
                            <textarea className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white h-32 focus:border-ka-red focus:outline-none transition-colors" placeholder="Décrivez votre univers, vos couleurs, vos attentes..."></textarea>
                        </div>

                        <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 hover:border-ka-red/50 hover:bg-white/5 transition-all cursor-pointer">
                            <Upload size={32} className="mb-2" />
                            <span className="text-sm">Glisser vos références ici</span>
                        </div>

                        <button type="submit" className="w-full py-4 bg-ka-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                            ENVOYER LA REQUÊTE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
