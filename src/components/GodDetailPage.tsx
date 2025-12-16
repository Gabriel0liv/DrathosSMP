import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { godsData } from '../data/godsData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GodDetailPageProps {
    godId: string;
    onBack: () => void;
    onNavigate?: (id: string) => void;
}

export function GodDetailPage({ godId, onBack, onNavigate }: GodDetailPageProps) {
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
        <div className={`min-h-screen bg-[rgb(10,10,15)] text-white overflow-hidden relative flex flex-col`}>
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

            {/* Main Content Section - Moiras Style Layout */}
            <section className="relative w-full min-h-screen flex items-center overflow-hidden z-10 pt-24 pb-12">

                {/* Background Image - Absolute & Unconstrained (Moiras Style) */}
                <div className="absolute right-0 lg:-right-32 bottom-0 h-[60vh] lg:h-[95vh] w-auto z-0 pointer-events-none flex items-end justify-end">
                    {god.characterImage ? (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="h-full w-auto flex items-end justify-end"
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
                            className="h-full w-full flex items-center justify-center opacity-30 blur-sm"
                        >
                            <ImageWithFallback
                                src={god.symbol}
                                alt={god.name}
                                className="h-1/2 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            />
                        </motion.div>
                    )}
                </div>

                {/* Content Container - Constrained Width (Standard Margins) */}
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">

                    {/* Text Column - Slightly wider than ResourcesSection (max-w-2xl) */}
                    <div className="w-full max-w-2xl flex flex-col gap-6">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <h1 className={`text-4xl md:text-6xl font-bold mb-2 ${god.color}`}>
                                {god.name}
                            </h1>
                            <h2 className={`text-lg md:text-xl ${god.color} opacity-90 uppercase tracking-widest font-semibold`}>
                                {god.title}
                            </h2>
                        </motion.div>

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

                        {/* Manifestations */}
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

            {/* Banner / Navigation Section - Separate, Full Width, Gradient BG */}
            {onNavigate && (() => {
                const domusGods = godsData.filter(g => g.domus === god.domus);
                const currentIndex = domusGods.findIndex(g => g.id === god.id);
                const nextGod = domusGods[(currentIndex + 1) % domusGods.length];
                const prevGod = domusGods[(currentIndex - 1 + domusGods.length) % domusGods.length];

                return (
                    <section className={`relative w-full py-16 px-4 bg-gradient-to-r ${god.bgGradient} backdrop-blur-lg border-t border-white/10 z-20`}>
                        <div className="max-w-7xl mx-auto flex flex-col items-center">

                            {/* "Phrase" / Banner Text Placeholder - Using Title/Name styled elegantly */}
                            <div className="text-center mb-8 opacity-90 max-w-2xl">
                                <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-2">
                                    "{god.title}"
                                </h3>
                                {/* Just a visual separator line */}
                                <div className="h-1 w-24 bg-white/30 mx-auto rounded-full"></div>
                            </div>

                            {/* Responsive Navigation Container */}
                            <div className="flex justify-between items-center w-full lg:w-2/3 lg:max-w-3xl mx-auto bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                                {/* Previous God */}
                                <motion.div
                                    whileHover={{ x: -5 }}
                                    className="flex items-center gap-4 cursor-pointer group text-left flex-1"
                                    onClick={() => onNavigate(prevGod.id)}
                                >
                                    <ArrowLeft className="text-white/70 group-hover:text-white transition-colors w-8 h-8" />

                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 p-2 group-hover:border-white/40 transition-colors hidden sm:block">
                                            <ImageWithFallback
                                                src={prevGod.symbol}
                                                alt={prevGod.name}
                                                className="w-full h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wider">Anterior</p>
                                            <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">{prevGod.name}</h3>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Divider */}
                                <div className="h-12 w-px bg-white/20 mx-4"></div>

                                {/* Next God */}
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 cursor-pointer group text-right flex-row-reverse flex-1"
                                    onClick={() => onNavigate(nextGod.id)}
                                >
                                    <ArrowRight className="text-white/70 group-hover:text-white transition-colors w-8 h-8" />

                                    <div className="flex items-center gap-3 flex-row-reverse">
                                        <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 p-2 group-hover:border-white/40 transition-colors hidden sm:block">
                                            <ImageWithFallback
                                                src={nextGod.symbol}
                                                alt={nextGod.name}
                                                className="w-full h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wider">Próximo</p>
                                            <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">{nextGod.name}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                );
            })()}
        </div>
    );
}
