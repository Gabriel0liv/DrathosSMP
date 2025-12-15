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
        <div className={`min-h-screen bg-[rgb(10,10,15)] text-white overflow-hidden relative`}>
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

            {/* Background Image - Anchored Bottom Right of Section */}
            {god.characterImage ? (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute right-0 bottom-0 h-[85vh] lg:h-[95vh] w-auto z-0 pointer-events-none flex items-end justify-end"
                >
                    <ImageWithFallback
                        src={god.characterImage}
                        alt={god.name}
                        className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute right-0 bottom-0 h-[80vh] w-auto opacity-10 blur-sm z-0 pointer-events-none"
                >
                    <ImageWithFallback
                        src={god.symbol}
                        alt={god.name}
                        className="h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    />
                </motion.div>
            )}

            {/* Scrollable Content Section */}
            <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 min-h-screen flex flex-col justify-center">

                {/* Content Container - Vertically Centered */}
                <div className="w-full lg:w-2/3 lg:max-w-3xl flex flex-col justify-center gap-6">

                    {/* Header - Left Aligned */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className={`text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r ${god.bgGradient.replace('bg-', '')} bg-clip-text text-transparent`}>
                            {god.name}
                        </h1>
                        <h2 className={`text-lg md:text-xl ${god.color} opacity-90 uppercase tracking-widest font-semibold`}>
                            {god.title}
                        </h2>
                    </motion.div>

                    {/* Content Blocks - Consistent Size & High Contrast */}
                    <div className="space-y-4">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="prose prose-invert max-w-none text-left"
                        >
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed border-l-4 border-white/20 pl-6 whitespace-pre-line backdrop-blur-md bg-black/60 p-6 rounded-r-2xl shadow-lg">
                                {god.description}
                            </p>
                        </motion.div>

                        {/* Domains */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="backdrop-blur-md bg-black/60 p-6 rounded-2xl border border-white/10 shadow-lg"
                        >
                            <h3 className={`text-xl font-bold mb-3 flex items-center gap-3 ${god.color}`}>
                                ✧ Filosofia & Personalidade
                            </h3>
                            <p className="text-gray-200 leading-relaxed whitespace-pre-line text-base text-left">
                                {god.domains}
                            </p>
                        </motion.div>

                        {/* Personality/Manifestations */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="backdrop-blur-md bg-black/60 p-6 rounded-2xl border border-white/10 shadow-lg"
                        >
                            <h3 className={`text-xl font-bold mb-3 flex items-center gap-3 ${god.color}`}>
                                ✧ Manifestações & Símbolos
                            </h3>
                            <p className="text-gray-200 leading-relaxed whitespace-pre-line text-base text-left">
                                {god.personality}
                            </p>
                        </motion.div>
                    </div>
                </div>

            </section>
        </div>
    );
}
