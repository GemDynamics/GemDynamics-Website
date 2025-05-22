import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Brain, Sparkles, MessageSquare, ArrowRight, Settings, BookOpen, Code, Zap } from 'lucide-react';

export default function DynamicPersonalityLanding() {
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

    const handleIntersect = (entries: IntersectionObserverEntry[], _observer: IntersectionObserver) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        const id = target.dataset.id;
        const type = target.dataset.type;
        
        if (entry.isIntersecting) {
          if (type === 'section') {
            setVisibleSections(prev => ({
              ...prev,
              [id as string]: true
            }));
          } else if (type === 'featureItem') {
            const index = parseInt(id as string);
            setVisibleSections(prev => {
              const newFeatureItems = [...prev.featureItems];
              newFeatureItems[index] = true;
              return { ...prev, featureItems: newFeatureItems };
            });
          } else if (type === 'timelineItem') {
            const index = parseInt(id as string);
            setVisibleSections(prev => {
              const newTimelineItems = [...prev.timelineItems];
              newTimelineItems[index] = true;
              return { ...prev, timelineItems: newTimelineItems };
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe main sections
    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    // Observe feature items
    featureItemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Observe timeline items
    timelineItemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Feature rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev >= 6 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      title: "Adaptive & Konsistente Persönlichkeit",
      icon: <Brain className="w-6 h-6" />,
      description: "Ihr Gem lernt Ihre Präferenzen und passt sich individuell an, während es seine Grundidentität beibehält."
    },
    {
      id: 2,
      title: "Modulares Dynamisches Gedächtnis",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Strukturierte Speicherung Ihrer Präferenzen für eine konsistente Erfahrung über alle Interaktionen hinweg."
    },
    {
      id: 3,
      title: "Kontextsensitive Feedback-Interpretation",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Intelligente Analyse expliziter und impliziter Nutzerfeedbacks für kontinuierliche Verbesserung."
    },
    {
      id: 4,
      title: "Gesteuerte Prompt-Evolution",
      icon: <Code className="w-6 h-6" />,
      description: "Kontrollierte Anpassung der Systemparameter für optimierte und zielgerichtete Interaktionen."
    },
    {
      id: 5,
      title: "Proaktive Nutzung des Gedächtnisses",
      icon: <Zap className="w-6 h-6" />,
      description: "Aktive Anwendung gelernter Präferenzen ohne wiederholte Anweisungen."
    },
    {
      id: 6,
      title: "Definierter Startpunkt & Stabilität",
      icon: <Settings className="w-6 h-6" />,
      description: "Verlässliche Grundstruktur mit gezielten Anpassungen für Konsistenz und Vertrauen."
    }
  ];

  // Callback-Funktionen für die Refs
  const setFeatureItemRef = (el: HTMLDivElement | null, index: number) => {
    featureItemRefs.current[index] = el;
  };

  const setTimelineItemRef = (el: HTMLDivElement | null, index: number) => {
    timelineItemRefs.current[index] = el;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 sticky top-0 bg-slate-950/80 backdrop-blur-lg z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-400" />
            <span className="font-bold text-xl">GemDynamics</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Showcase</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">About</a>
          </nav>
          <button className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg transition-colors font-medium flex items-center gap-2 group">
            Get Started <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Hero Section with Animation */}
      <section 
        ref={heroRef} 
        data-id="hero" 
        data-type="section"
        className="container mx-auto py-16 md:py-24 px-4 flex flex-col md:flex-row items-center"
      >
        <div 
          className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 ${
            visibleSections.hero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dynamische Persönlichkeit</span>
            <br />für KI-Assistenten
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
            Die nächste Evolution der KI-Interaktion: Gems, die aus jeder Konversation lernen und sich perfekt an Ihre individuellen Bedürfnisse anpassen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 group">
              Demo starten <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="bg-transparent border border-slate-600 hover:border-slate-400 py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 group">
              Mehr erfahren <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div 
          className={`md:w-1/2 relative transition-all duration-1000 ${
            visibleSections.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="w-full h-80 md:h-96 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-1">
            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
              <div className="absolute top-4 left-4 right-4 h-12 bg-slate-800 rounded-lg flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                  <span className="text-sm">GemDynamics Assistant</span>
                </div>
              </div>
              <div className="mt-16 w-4/5 flex flex-col gap-4">
                <div className="bg-slate-800 p-4 rounded-lg rounded-tl-none animate-fadeIn">
                  Hallo! Ich bin dein persönlicher Gem-Assistent. Wie kann ich dir heute helfen?
                </div>
                <div className="bg-indigo-600/20 p-4 rounded-lg rounded-tr-none self-end animate-fadeIn animation-delay-300">
                  Kannst du mir kurz und knapp erklären, was dynamische Persönlichkeit bedeutet?
                </div>
                <div className="bg-slate-800 p-4 rounded-lg rounded-tl-none animate-fadeIn animation-delay-600">
                  Dynamische Persönlichkeit bedeutet, dass ich mich an deine Präferenzen anpasse. 
                  Ich lerne aus unseren Gesprächen und passe meinen Stil und meine Antworten 
                  entsprechend an - ohne meine Grundidentität zu verlieren.
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -top-6 -left-6 h-24 w-24 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-500"></div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features"
        ref={featuresRef}
        data-id="features" 
        data-type="section"
        className="container mx-auto py-16 md:py-24 px-4"
      >
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.features ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Die sechs Grundpfeiler</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Unsere dynamische Persönlichkeitsarchitektur basiert auf sechs universellen Prinzipien, 
            die eine anpassungsfähige, aber stabile KI-Interaktion gewährleisten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              ref={(el) => setFeatureItemRef(el, index)}
              data-id={index}
              data-type="featureItem"
              className={`p-6 rounded-xl transition-all duration-700 ${
                activeFeature === feature.id 
                  ? 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50'
              } ${
                visibleSections.featureItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg transition-colors ${
                  activeFeature === feature.id 
                    ? 'bg-indigo-600/30 text-indigo-300' 
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
              <p className="text-slate-300">{feature.description}</p>
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
        className="container mx-auto py-16 md:py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl"
      >
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.timeline ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie es funktioniert</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Ein Blick auf den technischen Prozess hinter der dynamischen Anpassung Ihres Gems.
          </p>
        </div>

        <div className="relative py-10">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500/80 to-purple-500/80"></div>
          
          {/* Timeline steps */}
          <div className="grid grid-cols-1 gap-16">
            {/* Step 1 */}
            <div 
              ref={(el) => setTimelineItemRef(el, 0)}
              data-id={0}
              data-type="timelineItem"
              className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 ${
                visibleSections.timelineItems[0] ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Initialer Zustand</h3>
                <p className="text-slate-300">
                  Jeder Gem beginnt mit einer klar definierten Grundpersönlichkeit und einem leeren dynamischen Gedächtnis.
                </p>
              </div>
              <div className="relative md:w-0 flex justify-center order-1 md:order-2">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 animate-pulse">
                  <span className="font-bold">1</span>
                </div>
              </div>
              <div className="md:w-1/2 order-3">
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors">
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
              className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 ${
                visibleSections.timelineItems[1] ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="md:w-1/2 order-2 md:order-3">
                <h3 className="text-xl font-bold mb-2">Feedback-Interpretation</h3>
                <p className="text-slate-300">
                  Der Gem analysiert kontinuierlich Interaktionen und identifiziert Präferenzmuster.
                </p>
              </div>
              <div className="relative md:w-0 flex justify-center order-1">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 animate-pulse animation-delay-300">
                  <span className="font-bold">2</span>
                </div>
              </div>
              <div className="md:w-1/2 md:text-right order-3 md:order-1">
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors">
                  <p className="text-sm text-slate-300">
                    "Nutzer bevorzugt kurze, prägnante Antworten ohne technischen Jargon."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div 
              ref={(el) => setTimelineItemRef(el, 2)}
              data-id={2}
              data-type="timelineItem"
              className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 ${
                visibleSections.timelineItems[2] ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2">Gedächtnis-Aktualisierung</h3>
                <p className="text-slate-300">
                  Erkannte Präferenzen werden strukturiert im dynamischen Gedächtnis gespeichert.
                </p>
              </div>
              <div className="relative md:w-0 flex justify-center order-1 md:order-2">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 animate-pulse animation-delay-600">
                  <span className="font-bold">3</span>
                </div>
              </div>
              <div className="md:w-1/2 order-3">
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors">
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
              className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 ${
                visibleSections.timelineItems[3] ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="md:w-1/2 order-2 md:order-3">
                <h3 className="text-xl font-bold mb-2">Anpassung der Interaktion</h3>
                <p className="text-slate-300">
                  Der Gem passt sein Verhalten proaktiv an die gespeicherten Präferenzen an.
                </p>
              </div>
              <div className="relative md:w-0 flex justify-center order-1">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 animate-pulse animation-delay-900">
                  <span className="font-bold">4</span>
                </div>
              </div>
              <div className="md:w-1/2 md:text-right order-3 md:order-1">
                <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-4 rounded-lg border border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
                  <p className="text-sm">
                    KI-Antworten werden automatisch kürzer, präziser und verwenden allgemeinverständliche Sprache.
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
        className="container mx-auto py-16 px-4 text-center"
      >
        <div 
          className={`bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-3xl p-12 relative overflow-hidden transition-all duration-1000 ${
            visibleSections.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Bereit für die Zukunft der KI-Interaktion?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
            Integrieren Sie die dynamische Persönlichkeitsarchitektur in Ihre eigenen Gems und schaffen Sie 
            einzigartige, adaptive Erfahrungen für Ihre Nutzer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-indigo-600 hover:bg-indigo-700 py-3 px-8 rounded-lg transition-all hover:scale-105 font-medium">
              Dokumentation
            </button>
            <button className="bg-transparent border border-indigo-600/50 hover:border-indigo-400 py-3 px-8 rounded-lg transition-all hover:scale-105 font-medium">
              GitHub Repository
            </button>
          </div>
          <div className="absolute -bottom-16 right-16 h-48 w-48 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -top-16 -left-8 h-40 w-40 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-700"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-12 px-4">
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <span className="font-bold">GemDynamics</span>
            <span className="text-sm text-slate-400 ml-2">© 2025</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Impressum</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Kontakt</a>
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