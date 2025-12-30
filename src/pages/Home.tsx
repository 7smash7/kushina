import { Hero } from '../components/Hero';
import { BentoGrid } from '../components/BentoGrid';
import { Mission } from '../components/Mission';
import { Process } from '../components/Process';
import { Pricing } from '../components/Pricing';

export const Home = () => {
    return (
        <>
            <Hero />
            <BentoGrid />
            <Mission />
            <Process />
            <Pricing />
        </>
    );
};
