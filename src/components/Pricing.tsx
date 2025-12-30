import { Check } from 'lucide-react';

interface PricingCardProps {
    title: string;
    price?: string;
    features: string[];
    recommended?: boolean;
}

const PricingCard = ({ title, price, features, recommended = false }: PricingCardProps) => (
    <div className={`relative p-8 rounded-2xl border ${recommended ? 'bg-white/5 border-ka-gold shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-transparent border-white/10'}`}>
        {recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-ka-gold text-ka-black text-xs font-bold uppercase tracking-wider rounded-full">
                Recommandé
            </div>
        )}
        <h3 className={`text-2xl font-display font-bold mb-2 ${recommended ? 'text-ka-gold' : 'text-ka-gray'}`}>{title}</h3>
        <p className="text-sm text-ka-gray/60 mb-1">À partir de</p>
        <div className="text-3xl font-display font-bold text-ka-gray mb-6">
            {price}
        </div>

        <ul className="space-y-4 mb-8">
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-ka-gray/80 text-sm">
                    <Check size={16} className="text-ka-red mt-0.5 shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>

        <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${recommended
            ? 'bg-ka-gold text-ka-black hover:bg-yellow-400'
            : 'bg-ka-gray/10 text-ka-gray hover:bg-ka-gray/20'
            }`}>
            CHOISIR
        </button>
    </div>
);

export const Pricing = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold text-ka-gray mb-16 text-center">OFFRES EXCLUSIVES</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingCard
                        title="Digital Solo"
                        price="45€"
                        features={['1 Illustration HD', 'Usage Commercial', 'Fichiers Sources (PSD)', 'Révisions Illimitées']}
                    />
                    <PricingCard
                        title="Pack Streamer Elite"
                        price="250€"
                        features={['Logo & Bannière', '5 Emotes Animées', 'Overlay Complet', 'Alertes Personnalisées', 'Support Prioritaire']}
                        recommended
                    />
                    <PricingCard
                        title="Original Canvas"
                        price="120€"
                        features={['Tableau Physique Unique', 'Certificat d\'Authenticité', 'Livraison Sécurisée', 'Format au Choix', 'Dédicace Personnalisée']}
                    />
                </div>
            </div>
        </section>
    );
};
