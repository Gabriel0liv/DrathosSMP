import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { godsData } from '../data/godsData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GodDetailPageProps {
    godId: string;
    onBack: () => void;
}

export function GodDetailPage({ godId, onBack }: GodDetailPageProps) {
    const god = godsData.find((g) => g.id === godId);

    if (!god) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[rgb(10,10,15)] text-white">
                <div className="text-center">
                    <h2 className="text-2xl mb-4">Deus não encontrado</h2>
                    <button onClick={onBack} className="text-celestial hover:underline">
                        Voltar para o Início
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-[rgb(10,10,15)] text-white overflow-hidden`}>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 p-6 z-50">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Voltar</span>
                </button>
            </nav>

            {/* Hero / Header Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${god.bgGradient.replace('bg-', '')} bg-clip-text text-transparent`}>
                        {god.name}
                    </h1>
                    <h2 className={`text-xl md:text-2xl ${god.color} opacity-80 uppercase tracking-widest`}>
                        {god.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column - Image (or Symbol if no hero image) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="lg:col-span-4 flex justify-center lg:justify-start"
                    >
                        <div className={`relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 ${god.color.replace('text-', 'border-')} bg-gradient-to-b ${god.bgGradient}`}>
                            <div className={`absolute inset-0 flex items-center justify-center ${god.characterImage ? '' : 'p-12'}`}>
                                <ImageWithFallback
                                    src={god.characterImage || god.symbol}
                                    alt={god.name}
                                    className={`w-full h-full object-contain ${god.characterImage ? 'object-cover' : 'opacity-80 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]'}`}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Description / Intro */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="prose prose-invert max-w-none"
                        >
                            <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-white/10 pl-6 whitespace-pre-line">
                                {god.description}
                            </p>
                        </motion.div>

                        {/* Domains */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${god.color}`}>
                                ✧ Filosofia & Personalidade
                            </h3>
                            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                                {god.domains}
                            </p>
                        </motion.div>

                        {/* Personality */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${god.color}`}>
                                ✧ Manifestações & Símbolos
                            </h3>
                            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                                {god.personality}
                            </p>
                        </motion.div>

                        {/* Manifestations - Removed duplicate block since mapped to personality field above for now, or check for unique content */}
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative w-full h-[300px] mt-24 overflow-hidden"
            >
                <div className={`absolute inset-0 bg-gradient-to-t ${god.bgGradient} opacity-60 z-10`} />
                {/* Banner Image */}
                <ImageWithFallback
                    src={god.banner}
                    alt={`${god.name} Banner`}
                    className="w-full h-full object-cover grayscale opacity-50"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase drop-shadow-lg">
                        {god.name}
                    </h2>
                </div>
            </motion.section>
        </div>
    );
}
