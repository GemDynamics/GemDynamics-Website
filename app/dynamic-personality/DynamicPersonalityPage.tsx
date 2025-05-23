import { useState, useEffect, useRef } from 'react';
import {
    ChevronRight,
    Brain,
    Sparkles,
    MessageSquare,
    ArrowRight,
    Settings,
    BookOpen,
    Code,
    Zap,
} from 'lucide-react';

export default function DynamicPersonalityPage() {
    const [activeFeature, setActiveFeature] = useState(1);

    // Refs for scroll animations
    const heroRef = useRef<HTMLElement>(null);
    const featuresRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);
    const featureItemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    // State to track visibility
    const [visibleSections, setVisibleSections] = useState({
        hero: false,
        features: false,
        timeline: false,
        cta: false,
        featureItems: Array(6).fill(false),
        timelineItems: Array(4).fill(false),
    });

    // Set up Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const target = entry.target as HTMLElement;
                const id = target.dataset.id;
                const type = target.dataset.type;

                if (entry.isIntersecting) {
                    if (type === 'section') {
                        setVisibleSections((prev) => ({
                            ...prev,
                            [id as string]: true,
                        }));
                    } else if (type === 'featureItem') {
                        const index = parseInt(id as string);
                        setVisibleSections((prev) => {
                            const newFeatureItems = [...prev.featureItems];
                            newFeatureItems[index] = true;
                            return { ...prev, featureItems: newFeatureItems };
                        });
                    } else if (type === 'timelineItem') {
                        const index = parseInt(id as string);
                        setVisibleSections((prev) => {
                            const newTimelineItems = [...prev.timelineItems];
                            newTimelineItems[index] = true;
                            return { ...prev, timelineItems: newTimelineItems };
                        });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(
            handleIntersect,
            observerOptions,
        );

        // Observe main sections
        if (heroRef.current) observer.observe(heroRef.current);
        if (featuresRef.current) observer.observe(featuresRef.current);
        if (timelineRef.current) observer.observe(timelineRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);

        // Observe feature items
        featureItemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Observe timeline items
        timelineItemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Feature rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev >= 6 ? 1 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            id: 1,
            title: 'Adaptive & Konsistente Persönlichkeit',
            icon: <Brain className="h-6 w-6" />,
            description:
                'Ihr Gem lernt Ihre Präferenzen und passt sich individuell an, während es seine Grundidentität beibehält.',
        },
        {
            id: 2,
            title: 'Modulares Dynamisches Gedächtnis',
            icon: <BookOpen className="h-6 w-6" />,
            description:
                'Strukturierte Speicherung Ihrer Präferenzen für eine konsistente Erfahrung über alle Interaktionen hinweg.',
        },
        {
            id: 3,
            title: 'Kontextsensitive Feedback-Interpretation',
            icon: <MessageSquare className="h-6 w-6" />,
            description:
                'Intelligente Analyse expliziter und impliziter Nutzerfeedbacks für kontinuierliche Verbesserung.',
        },
        {
            id: 4,
            title: 'Gesteuerte Prompt-Evolution',
            icon: <Code className="h-6 w-6" />,
            description:
                'Kontrollierte Anpassung der Systemparameter für optimierte und zielgerichtete Interaktionen.',
        },
        {
            id: 5,
            title: 'Proaktive Nutzung des Gedächtnisses',
            icon: <Zap className="h-6 w-6" />,
            description:
                'Aktive Anwendung gelernter Präferenzen ohne wiederholte Anweisungen.',
        },
        {
            id: 6,
            title: 'Definierter Startpunkt & Stabilität',
            icon: <Settings className="h-6 w-6" />,
            description:
                'Verlässliche Grundstruktur mit gezielten Anpassungen für Konsistenz und Vertrauen.',
        },
    ];

    // Callback-Funktionen für die Refs
    const setFeatureItemRef = (el: HTMLDivElement | null, index: number) => {
        featureItemRefs.current[index] = el;
    };

    const setTimelineItemRef = (el: HTMLDivElement | null, index: number) => {
        timelineItemRefs.current[index] = el;
    };

    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-br from-slate-950 to-slate-900 text-white">
            {/* Header */}
            <header className="container sticky top-0 z-50 mx-auto bg-slate-950/80 px-4 py-6 backdrop-blur-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-indigo-400" />
                        <span className="text-xl font-bold">GemDynamics</span>
                    </div>
                    <nav className="hidden items-center gap-8 md:flex">
                        <a
                            href="#features"
                            className="text-slate-300 transition-colors hover:text-white"
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-slate-300 transition-colors hover:text-white"
                        >
                            How It Works
                        </a>
                        <a
                            href="#"
                            className="text-slate-300 transition-colors hover:text-white"
                        >
                            Showcase
                        </a>
                        <a
                            href="#"
                            className="text-slate-300 transition-colors hover:text-white"
                        >
                            About
                        </a>
                    </nav>
                    <button className="group flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium transition-colors hover:bg-indigo-700">
                        Get Started{' '}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </header>

            {/* Hero Section with Animation */}
            <section
                ref={heroRef}
                data-id="hero"
                data-type="section"
                className="container mx-auto flex flex-col items-center px-4 py-16 md:flex-row md:py-24"
            >
                <div
                    className={`mb-12 transition-all duration-1000 md:mb-0 md:w-1/2 ${
                        visibleSections.hero
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-12 opacity-0'
                    }`}
                >
                    <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Dynamische Persönlichkeit
                        </span>
                        <br />
                        für KI-Assistenten
                    </h1>
                    <p className="mb-8 max-w-lg text-lg text-slate-300 md:text-xl">
                        Die nächste Evolution der KI-Interaktion: Gems, die aus
                        jeder Konversation lernen und sich perfekt an Ihre
                        individuellen Bedürfnisse anpassen.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button className="group flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium transition-colors hover:bg-indigo-700">
                            Demo starten{' '}
                            <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
                        </button>
                        <button className="group flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-6 py-3 font-medium transition-colors hover:border-slate-400">
                            Mehr erfahren{' '}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
                <div
                    className={`relative transition-all duration-1000 md:w-1/2 ${
                        visibleSections.hero
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-12 opacity-0'
                    }`}
                >
                    <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-1 md:h-96">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-slate-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                            <div className="absolute left-4 right-4 top-4 flex h-12 items-center rounded-lg bg-slate-800 px-4">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="mx-auto flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 animate-pulse text-indigo-400" />
                                    <span className="text-sm">
                                        GemDynamics Assistant
                                    </span>
                                </div>
                            </div>
                            <div className="mt-16 flex w-4/5 flex-col gap-4">
                                <div className="animate-fadeIn rounded-lg rounded-tl-none bg-slate-800 p-4">
                                    Hallo! Ich bin dein persönlicher
                                    Gem-Assistent. Wie kann ich dir heute
                                    helfen?
                                </div>
                                <div className="animate-fadeIn animation-delay-300 self-end rounded-lg rounded-tr-none bg-indigo-600/20 p-4">
                                    Kannst du mir kurz und knapp erklären, was
                                    dynamische Persönlichkeit bedeutet?
                                </div>
                                <div className="animate-fadeIn animation-delay-600 rounded-lg rounded-tl-none bg-slate-800 p-4">
                                    Dynamische Persönlichkeit bedeutet, dass ich
                                    mich an deine Präferenzen anpasse. Ich lerne
                                    aus unseren Gesprächen und passe meinen Stil
                                    und meine Antworten entsprechend an - ohne
                                    meine Grundidentität zu verlieren.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 h-24 w-24 animate-pulse rounded-full bg-indigo-600 opacity-30 blur-3xl"></div>
                    <div className="animation-delay-500 absolute -left-6 -top-6 h-24 w-24 animate-pulse rounded-full bg-purple-600 opacity-30 blur-3xl"></div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                ref={featuresRef}
                data-id="features"
                data-type="section"
                className="container mx-auto px-4 py-16 md:py-24"
            >
                <div
                    className={`mb-16 text-center transition-all duration-1000 ${
                        visibleSections.features
                            ? 'transform-none opacity-100'
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Die sechs Grundpfeiler
                    </h2>
                    <p className="mx-auto max-w-2xl text-slate-300">
                        Unsere dynamische Persönlichkeitsarchitektur basiert auf
                        sechs universellen Prinzipien, die eine
                        anpassungsfähige, aber stabile KI-Interaktion
                        gewährleisten.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            ref={(el) => setFeatureItemRef(el, index)}
                            data-id={index}
                            data-type="featureItem"
                            className={`rounded-xl p-6 transition-all duration-700 ${
                                activeFeature === feature.id
                                    ? 'border border-indigo-500/30 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 shadow-lg shadow-indigo-500/10'
                                    : 'border border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50'
                            } ${
                                visibleSections.featureItems[index]
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-16 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div
                                    className={`rounded-lg p-2 transition-colors ${
                                        activeFeature === feature.id
                                            ? 'bg-indigo-600/30 text-indigo-300'
                                            : 'bg-slate-700 text-slate-300'
                                    }`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-slate-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section
                id="how-it-works"
                ref={timelineRef}
                data-id="timeline"
                data-type="section"
                className="container mx-auto rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 px-4 py-16 md:py-24"
            >
                <div
                    className={`mb-16 text-center transition-all duration-1000 ${
                        visibleSections.timeline
                            ? 'transform-none opacity-100'
                            : 'translate-y-12 opacity-0'
                    }`}
                >
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Wie es funktioniert
                    </h2>
                    <p className="mx-auto max-w-2xl text-slate-300">
                        Ein Blick auf den technischen Prozess hinter der
                        dynamischen Anpassung Ihres Gems.
                    </p>
                </div>

                <div className="relative py-10">
                    {/* Timeline */}
                    <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-indigo-500/80 to-purple-500/80"></div>

                    {/* Timeline steps */}
                    <div className="grid grid-cols-1 gap-16">
                        {/* Step 1 */}
                        <div
                            ref={(el) => setTimelineItemRef(el, 0)}
                            data-id={0}
                            data-type="timelineItem"
                            className={`flex flex-col items-center gap-8 transition-all duration-1000 md:flex-row ${
                                visibleSections.timelineItems[0]
                                    ? 'transform-none opacity-100'
                                    : 'translate-y-12 opacity-0'
                            }`}
                        >
                            <div className="order-2 md:order-1 md:w-1/2 md:text-right">
                                <h3 className="mb-2 text-xl font-bold">
                                    Initialer Zustand
                                </h3>
                                <p className="text-slate-300">
                                    Jeder Gem beginnt mit einer klar definierten
                                    Grundpersönlichkeit und einem leeren
                                    dynamischen Gedächtnis.
                                </p>
                            </div>
                            <div className="relative order-1 flex justify-center md:order-2 md:w-0">
                                <div className="z-10 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-indigo-600">
                                    <span className="font-bold">1</span>
                                </div>
                            </div>
                            <div className="order-3 md:w-1/2">
                                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:border-indigo-500/50">
                                    <code className="text-xs text-slate-300">
                                        {`{"dynamicMemory": {"preferences": [], "adaptations": []}}`}
                                    </code>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div
                            ref={(el) => setTimelineItemRef(el, 1)}
                            data-id={1}
                            data-type="timelineItem"
                            className={`flex flex-col items-center gap-8 transition-all duration-1000 md:flex-row ${
                                visibleSections.timelineItems[1]
                                    ? 'transform-none opacity-100'
                                    : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            <div className="order-2 md:order-3 md:w-1/2">
                                <h3 className="mb-2 text-xl font-bold">
                                    Feedback-Interpretation
                                </h3>
                                <p className="text-slate-300">
                                    Der Gem analysiert kontinuierlich
                                    Interaktionen und identifiziert
                                    Präferenzmuster.
                                </p>
                            </div>
                            <div className="relative order-1 flex justify-center md:w-0">
                                <div className="animation-delay-300 z-10 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-indigo-600">
                                    <span className="font-bold">2</span>
                                </div>
                            </div>
                            <div className="order-3 md:order-1 md:w-1/2 md:text-right">
                                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:border-indigo-500/50">
                                    <p className="text-sm text-slate-300">
                                        "Nutzer bevorzugt kurze, prägnante
                                        Antworten ohne technischen Jargon."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div
                            ref={(el) => setTimelineItemRef(el, 2)}
                            data-id={2}
                            data-type="timelineItem"
                            className={`flex flex-col items-center gap-8 transition-all duration-1000 md:flex-row ${
                                visibleSections.timelineItems[2]
                                    ? 'transform-none opacity-100'
                                    : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <div className="order-2 md:order-1 md:w-1/2 md:text-right">
                                <h3 className="mb-2 text-xl font-bold">
                                    Gedächtnis-Aktualisierung
                                </h3>
                                <p className="text-slate-300">
                                    Erkannte Präferenzen werden strukturiert im
                                    dynamischen Gedächtnis gespeichert.
                                </p>
                            </div>
                            <div className="relative order-1 flex justify-center md:order-2 md:w-0">
                                <div className="animation-delay-600 z-10 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-indigo-600">
                                    <span className="font-bold">3</span>
                                </div>
                            </div>
                            <div className="order-3 md:w-1/2">
                                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:border-indigo-500/50">
                                    <code className="text-xs text-slate-300">
                                        {`{"dynamicMemory": {
  "preferences": [
    {"type": "communication", "value": "concise"},
    {"type": "language", "value": "non-technical"}
  ],
  "adaptations": []
}}`}
                                    </code>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div
                            ref={(el) => setTimelineItemRef(el, 3)}
                            data-id={3}
                            data-type="timelineItem"
                            className={`flex flex-col items-center gap-8 transition-all duration-1000 md:flex-row ${
                                visibleSections.timelineItems[3]
                                    ? 'transform-none opacity-100'
                                    : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            <div className="order-2 md:order-3 md:w-1/2">
                                <h3 className="mb-2 text-xl font-bold">
                                    Anpassung der Interaktion
                                </h3>
                                <p className="text-slate-300">
                                    Der Gem passt sein Verhalten proaktiv an die
                                    gespeicherten Präferenzen an.
                                </p>
                            </div>
                            <div className="relative order-1 flex justify-center md:w-0">
                                <div className="animation-delay-900 z-10 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-indigo-600">
                                    <span className="font-bold">4</span>
                                </div>
                            </div>
                            <div className="order-3 md:order-1 md:w-1/2 md:text-right">
                                <div className="rounded-lg border border-indigo-500/30 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-4 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                                    <p className="text-sm">
                                        KI-Antworten werden automatisch kürzer,
                                        präziser und verwenden
                                        allgemeinverständliche Sprache.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                ref={ctaRef}
                data-id="cta"
                data-type="section"
                className="container mx-auto px-4 py-16 text-center"
            >
                <div
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-12 transition-all duration-1000 ${
                        visibleSections.cta
                            ? 'scale-100 opacity-100'
                            : 'scale-95 opacity-0'
                    }`}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]"></div>
                    <h2 className="relative z-10 mb-6 text-3xl font-bold md:text-4xl">
                        Bereit für die Zukunft der KI-Interaktion?
                    </h2>
                    <p className="relative z-10 mx-auto mb-8 max-w-2xl text-slate-300">
                        Integrieren Sie die dynamische
                        Persönlichkeitsarchitektur in Ihre eigenen Gems und
                        schaffen Sie einzigartige, adaptive Erfahrungen für Ihre
                        Nutzer.
                    </p>
                    <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="rounded-lg bg-indigo-600 px-8 py-3 font-medium transition-all hover:scale-105 hover:bg-indigo-700">
                            Dokumentation
                        </button>
                        <button className="rounded-lg border border-indigo-600/50 bg-transparent px-8 py-3 font-medium transition-all hover:scale-105 hover:border-indigo-400">
                            GitHub Repository
                        </button>
                    </div>
                    <div className="absolute -bottom-16 right-16 h-48 w-48 animate-pulse rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
                    <div className="animation-delay-700 absolute -left-8 -top-16 h-40 w-40 animate-pulse rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
                </div>
            </section>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 md:flex-row">
                    <div className="mb-4 flex items-center gap-2 md:mb-0">
                        <Sparkles className="h-5 w-5 text-indigo-400" />
                        <span className="font-bold">GemDynamics</span>
                        <span className="ml-2 text-sm text-slate-400">
                            © 2025
                        </span>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            Impressum
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            Datenschutz
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            Kontakt
                        </a>
                    </div>
                </div>
            </footer>

            {/* CSS Animations */}
            <style>
                {`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-900 {
          animation-delay: 900ms;
        }
        `}
            </style>
        </div>
    );
}
