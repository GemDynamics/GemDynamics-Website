import React, { useState, useEffect, useCallback } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import {
  ChevronLeft, ChevronRight, UploadCloud, Puzzle, /* TrafficLight, */ MessageSquareText, Cog, // TrafficLight removed
  BrainCircuit, CheckCircle, AlertTriangle, XCircle, Library, /* ServerIcon, Users, */ Rocket, Award, ServerIcon, // ServerIcon re-added, Users removed
  /* Goal, */ ThumbsUp, Zap, /* Lightbulb, */ BarChart3, Handshake, /* GitFork, */ FileText, ScaleIcon, ShieldCheck, GitFork, // Goal removed, GitFork re-added, Lightbulb removed
  TrendingUp, /* Maximize, UsersRound, Milestone, Eye, Search, Network, */ Database, Palette, Layers, Search, Network, // Maximize, UsersRound, Milestone, Eye removed. Search re-added, Network re-added
  ArrowRightLeft, Sparkles, /* Info, Briefcase, */ Building, /* RotateCcw, Maximize2, */ Code, Settings, // Info, Briefcase, RotateCcw, Maximize2 removed
  /* UsersThree, Target, CalendarDays, */ Presentation as PresentationIcon, /* Mail, */ /* QrCode, */ Globe, // UsersThree, Target, CalendarDays, Linkedin, Github, QrCode, Mail removed
  ListChecks
} from 'lucide-react';

// --- Slide Data & Components ---

// Helper for consistent slide structure and transitions
// Hilfskomponente für eine konsistente Folienstruktur und Übergänge
const SlideWrapper = ({ isActive, children, className = "", bgClassName = "bg-slate-950" }) => (
  <div
  
    className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center items-center overflow-hidden ${
      isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'
    } ${bgClassName} ${className}`}
    aria-hidden={!isActive}
  >
    <div className="w-full h-full flex flex-col justify-center items-center p-8 md:p-16 relative">
      {children}
    </div>
  </div>
);

// Slide 1: Titelfolie
// Folie 1: Titelfolie
const Slide1 = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-gradient-to-br from-sky-900 via-slate-950 to-indigo-950" className="text-center">
    <div className="absolute inset-0 opacity-10 animate-pulse">
      {/* Abstrakte Hintergrundformen oder Partikel könnten hier platziert werden */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-sky-400/30"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-${i} ${Math.random() * 10 + 5}s ease-in-out infinite alternate`, // Unique animation name
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
    {/* Generiere individuelle Keyframes für jede Partikelanimation */}
    {/* <style jsx global>{`
      ${'[...Array(20)].map((_, i) => `
        @keyframes float-${i} {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          100% { transform: translateY(${Math.random() * 40 - 20}px) translateX(${Math.random() * 40 - 20}px) scale(${Math.random() * 0.5 + 0.8}); }
        }
      `).join('\n')}
    `}</style> */}
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-sky-300 to-emerald-400 block">KI-VERTRAGSANALYSE</span>
    </h1>
    <p className="text-2xl md:text-4xl lg:text-5xl font-light text-slate-300 mb-12 max-w-4xl">
      Nutzung von Next-Generation KI für beispiellose Effizienz und Erkenntnisse
    </p>
    <div className="space-y-3 text-slate-400 text-lg md:text-xl">
      <p>Präzision. Effizienz. Vorsprung.</p>
      <p className="font-semibold text-emerald-400">Ein Konzept ausgezeichnet beim KI Con | Hackathon 2025</p>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 opacity-70">
      {/* Platzhalter für Logos */}
      <PresentationIcon size={32} className="text-slate-500" />
    </div>
  </SlideWrapper>
);

// Slide 2: Die Herausforderung
// Folie 2: Die Herausforderung
const Slide2 = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-slate-900" className="text-center">
    <div className="absolute inset-0 opacity-5">
      {[...Array(10)].map((_,i) => (
        <FileText key={i} size={Math.random()*200 + 100} className="absolute text-slate-700" style={{top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, transform: `rotate(${Math.random()*360}deg)`}}/>
      ))}
    </div>
    <h2 className="text-4xl md:text-6xl font-bold text-rose-400 mb-8 relative">
      <span className="absolute -top-3 -left-3 text-7xl text-rose-500/30">§</span>
      KOMPLEXITÄT HOCH N:
    </h2>
    <p className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl">
      VERTRAGSRISIKEN IN DER BAU- & IMMOBILIENBRANCHE
    </p>
    
    <div className="max-w-5xl w-full mx-auto p-6 md:p-8 bg-slate-800/40 rounded-xl border border-rose-700 shadow-xl shadow-rose-900/30 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-8 mb-8 text-left text-slate-400 text-lg">
        <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-semibold text-rose-300 mb-3">Das Problem: Manuelle Prüfung</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Zeitfresser, Fehlerquelle, Kostenfaktor.</li>
            <li>Versteckte Fallstricke, unklare Formulierungen.</li>
            <li>Verpasste Chancen durch ineffiziente Verhandlungen.</li>
            <li>Rechtsstreitigkeiten als teure Konsequenz.</li>
          </ul>
        </div>
        <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 flex flex-col justify-center items-center text-center">
          <p className="text-4xl lg:text-5xl font-bold text-rose-400">Milliarden €</p>
          <p className="mt-1 text-slate-300">gehen jährlich durch suboptimale Verträge verloren.</p>
        </div>
      </div>
      <p className="text-lg md:text-xl italic text-slate-500 max-w-3xl mx-auto text-center">
        &ldquo;Die Komplexität von Bauverträgen ist eine der größten Hürden für Effizienz und Rentabilität in unserer Branche.&rdquo;
      </p>
    </div>
  </SlideWrapper>
);

// Slide 3: Unsere Lösung
// Folie 3: Unsere Lösung
const Slide3 = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-gradient-to-b from-slate-900 to-sky-900" className="text-center">
     <BrainCircuit size={128} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-500/10 opacity-50 animate-pulse" style={{filter: 'blur(20px)'}} />
    <h2 className="text-4xl md:text-6xl font-bold mb-8">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-emerald-400">DIE ANTWORT:</span>
    </h2>
    <p className="text-2xl md:text-4xl text-slate-200 mb-12 max-w-4xl">
      Intelligenz, die Verträge <span className="text-emerald-400 font-semibold">versteht</span> und <span className="text-emerald-400 font-semibold">optimiert</span>.
    </p>
    <div className="max-w-3xl w-full mx-auto p-6 md:p-8 bg-slate-800/40 rounded-xl border border-sky-700 shadow-xl shadow-sky-900/40 backdrop-blur-sm">
      <p className="text-xl text-slate-300 mb-6">
        Wir präsentieren einen fortschrittlichen Prototyp, der die Vertragsanalyse revolutioniert.
        Eine Symbiose aus <strong className="text-sky-300">moderner KI-Technologie</strong> und <strong className="text-sky-300">juristischer Expertise</strong>.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg">
        <div className="flex flex-col items-center p-4 bg-sky-700/30 rounded-lg">
          <Zap size={32} className="text-emerald-400 mb-2" />
          <h3 className="font-semibold text-slate-100">Schneller</h3>
          <p className="text-slate-400 text-sm">Analyse in Minuten, nicht Tagen.</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-sky-700/30 rounded-lg">
          <ShieldCheck size={32} className="text-emerald-400 mb-2" />
          <h3 className="font-semibold text-slate-100">Sicherer</h3>
          <p className="text-slate-400 text-sm">Präzise Identifikation kritischer Klauseln.</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-sky-700/30 rounded-lg">
          <ThumbsUp size={32} className="text-emerald-400 mb-2" />
          <h3 className="font-semibold text-slate-100">Stärker</h3>
          <p className="text-slate-400 text-sm">Fundierte Basis für Verhandlungen.</p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// Slide 4: So funktioniert's
// Folie 4: So funktioniert's
const Slide4 = ({ isActive }) => {
  const steps = [
    { icon: UploadCloud, title: "UPLOAD & ANALYSE", description: "Vertrag hochladen, KI erfasst und strukturiert den Text." },
    { icon: Puzzle, title: "INTELLIGENTE SEGMENTIERUNG", description: "Aufteilung in logische Klauseln für präzise Analyse." },
    { icon: ListChecks, title: "KLAUSELBEWERTUNG IM KONTEXT", description: "Einstufung mittels Ampelsystem (🔴🟡🟢) und Wissensdatenbank." },
    { icon: MessageSquareText, title: "FORMULIERUNGSVORSCHLÄGE", description: "KI generiert optimierte, rechtssichere Alternativen." },
    { icon: Sparkles, title: "INTERAKTIVE OPTIMIERUNG", description: "Gemeinsame Verfeinerung mit direkter KI-Unterstützung." },
  ];

  return (
    <SlideWrapper isActive={isActive} bgClassName="bg-slate-900" className="text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">VOM TEXTCHAOS ZUR KLAREN HANDLUNGSEMPFEHLUNG</h2>
      <p className="text-xl md:text-2xl text-sky-400 mb-12">Unser 5-Schritte-Prozess</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {steps.map((step, index) => {
          const baseClasses = "p-6 rounded-lg border flex flex-col items-center text-center bg-slate-800/70 border-slate-700 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-700/20 transition-all transform hover:scale-105";
          let specialClasses = '';
          // For 5 items on medium screens (2 columns):
          // The 5th item (index 4) should span 2 columns.
          if (steps.length === 5 && index === 4) {
            specialClasses = 'md:col-span-2';
          }
          // On large screens (3 columns), items will naturally flow:
          // Row 1: items 0, 1, 2
          // Row 2: items 3, 4 (item 5 will be empty)
          // No specific lg classes are needed for this natural flow of 5 items.

          return (
            <div
              key={index}
              className={`${baseClasses} ${specialClasses}`}
            >
              <step.icon size={48} className="text-sky-400 mb-4" />
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{index + 1}. {step.title}</h3>
              <p className="text-sm text-slate-400">{step.description}</p>
            </div>
          );
        })}
      </div>
    </SlideWrapper>
  );
};

// NEU: Slide Deep Dive 1: Globale Vertrags-Kartographie
const SlideDeepDive1Kartographie = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-slate-900" className="text-center">
    <Layers size={100} className="absolute top-1/4 left-1/4 text-sky-500/10 opacity-50 animate-pulse" style={{filter: 'blur(10px)'}}/>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-3">DEEP DIVE (1/3): GLOBALE VERTRAGS-KARTOGRAPHIE</h2>
    <p className="text-xl md:text-2xl text-sky-400 mb-8">Stufe 1: Das Große Ganze erfassen mit Gemini Pro</p>
    
    <div className="max-w-4xl mx-auto text-left bg-slate-800/50 p-6 md:p-8 rounded-xl border border-sky-700 shadow-xl shadow-sky-900/40">
      <div className="md:flex items-center mb-6">
        <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold text-sky-300 mb-2">Input</h3>
          <p className="text-slate-400 text-lg">Vollständiger, roher Vertragstext.</p>
        </div>
        <ArrowRightLeft size={32} className="hidden md:block mx-6 text-sky-500 shrink-0" />
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-sky-300 mb-2">Prozess & Output</h3>
          <p className="text-slate-300 text-lg">
            Gemini Pro identifiziert akribisch die globale Hauptstruktur (z.B. §-Abschnitte, Artikel) und teilt den Vertrag intelligent in 4-6 große, logische und kontextuell zusammenhängende Chunks.
          </p>
        </div>
      </div>
      
      <div className="bg-sky-900/30 p-4 rounded-lg">
        <h4 className="text-xl font-semibold text-sky-200 mb-2">Warum das wichtig ist:</h4>
        <p className="text-slate-300">
          Sicherstellung, dass kein kritischer Abschnitt übersehen wird. Bereitet den Boden für eine tiefe, fokussierte Analyse, ohne das Gesamtbild zu verlieren und bewahrt die Integrität der Hauptabschnitte.
        </p>
      </div>
    </div>
    {/* <p className="mt-8 text-sm text-slate-500">Visualisierung: Ein Dokument, das von einer KI sauber in große Blöcke segmentiert wird.</p> */}
  </SlideWrapper>
);

// NEU: Slide Deep Dive 2: Mikro-Strukturierung
const SlideDeepDive2Strukturierung = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-slate-950" className="text-center">
    <GitFork size={100} className="absolute top-3/4 left-1/4 text-indigo-500/10 opacity-50 -rotate-12" style={{filter: 'blur(8px)'}}/>
    <Code size={80} className="absolute top-1/4 right-1/4 text-indigo-500/10 opacity-50 rotate-12" style={{filter: 'blur(8px)'}}/>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-3">DEEP DIVE (2/3): MIKRO-STRUKTURIERUNG & MARKDOWN</h2>
    <p className="text-xl md:text-2xl text-indigo-400 mb-8">Stufe 2: Detaillierte Aufschlüsselung mit Gemini Pro</p>
    
    <div className="max-w-4xl mx-auto text-left bg-slate-800/60 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-indigo-700 shadow-xl shadow-indigo-900/40">
      <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">Input (pro Chunk)</h3>
          <p className="text-slate-400 text-lg">Jeder große Chunk aus Stufe 1 (parallel verarbeitet).</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">Prozess</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-300 text-lg">
            <li>Detaillierte hierarchische Aufschlüsselung jedes Chunks.</li>
            <li>Identifiziert H2-, H3-Ebenen, Klauseln, Unterklauseln.</li>
            <li>Generiert H3-Überschriften für thematische Blöcke (auch wenn nicht im Original).</li>
            <li>Konvertiert gesamten Inhalt in formatiertes Markdown.</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-2">Output</h3>
        <p className="text-slate-300 text-lg">
          Eine reichhaltige JSON-Struktur, die die Vertragshierarchie abbildet, mit Markdown für jedes Element, versehen mit globaler Chunk-Nummer.
        </p>
      </div>
      
      <div className="bg-indigo-900/30 p-4 rounded-lg">
        <h4 className="text-xl font-semibold text-indigo-200 mb-2">Warum das wichtig ist:</h4>
        <p className="text-slate-300">
          Erstellt eine extrem lesbare und programmatisch zugängliche Version des Vertrags. KI-generierte H3-Überschriften schaffen signifikante Klarheit und Struktur.
        </p>
      </div>
    </div>
    {/* <p className="mt-8 text-sm text-slate-500">Visualisierung: Block wird in detaillierte Baumstruktur mit Code-Snippets zerlegt.</p> */}
  </SlideWrapper>
);

// NEU: Slide Deep Dive 3: Kontextsensitive Analyse & RAG
const SlideDeepDive3AnalyseRAG = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900" className="text-center">
    <ListChecks size={100} className="absolute top-1/4 right-1/4 text-emerald-500/10 opacity-50 rotate-12" style={{filter: 'blur(8px)'}}/>
    <Database size={80} className="absolute bottom-1/4 left-1/4 text-emerald-500/10 opacity-50 -rotate-12" style={{filter: 'blur(8px)'}}/>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-3">DEEP DIVE (3/3): KLAUSELANALYSE & RAG</h2>
    <p className="text-xl md:text-2xl text-emerald-400 mb-8">Stufe 3: Präzise Bewertung mit Gemini Flash & Wissensbasis</p>
    
    <div className="max-w-5xl mx-auto text-left bg-slate-800/60 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-emerald-700 shadow-xl shadow-emerald-900/40">
      <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-emerald-300 mb-2">Input</h3>
          <p className="text-slate-400 text-lg">Einzelne strukturierte Elemente (Klauseln, Absätze) aus Stufe 2 (parallel verarbeitet).</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-emerald-300 mb-2 flex items-center">
            <Zap size={28} className="mr-2 text-yellow-400"/> Die RAG-Magie 
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-slate-300 text-lg">
            <li>Klauseltext wird in Vektor eingebettet.</li>
            <li>Convex Vector Search durchsucht Wissensdatenbank (Gesetze, VOB/B, ÖNORM, Urteile, Best Practices).</li>
            <li>Abgerufener Kontext + Klausel gehen an Gemini Flash.</li>
          </ol>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-emerald-300 mb-2">Analyseprozess</h3>
          <p className="text-slate-300 text-lg">
            Gemini Flash analysiert die Klausel unter Berücksichtigung des spezifischen Expertenkontexts aus der Wissensdatenbank.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-emerald-300 mb-2">Output (pro Element)</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-300 text-lg">
            <li><span className="text-rose-400 font-bold">🔴 Rot</span> / <span className="text-yellow-400 font-bold">🟡 Gelb</span> / <span className="text-green-400 font-bold">🟢 Grün</span> / <span className="text-sky-400 font-bold">ℹ️ Info</span> Bewertung</li>
            <li>Klare Begründung (basiert auf abger. Wissen)</li>
            <li>Umsetzbare Handlungsempfehlung</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-emerald-900/30 p-4 rounded-lg">
        <h4 className="text-xl font-semibold text-emerald-200 mb-2">Warum das wichtig ist:</h4>
        <p className="text-slate-300">
          Geht über einfache Mustererkennung hinaus. Bietet hochrelevante, kontextsensitive Risikobewertung basierend auf einer dynamischen Wissensdatenbank – nicht nur statischen Regeln.
        </p>
      </div>
    </div>
    {/* <p className="mt-8 text-sm text-slate-500">Visualisierung: Daten fliessen von Klausel zu Vektordatenbank zu LLM für Bewertung.</p> */}
  </SlideWrapper>
);

// NEU: Slide System Prompts
const SlideSystemPrompts = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-slate-900" className="text-center">
    <Cog size={100} className="absolute top-1/4 left-1/4 text-teal-500/10 opacity-50 animate-spin-slow" style={{filter: 'blur(10px)'}}/>
    <FileText size={80} className="absolute bottom-1/4 right-1/4 text-teal-500/10 opacity-50" style={{filter: 'blur(8px)'}}/>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-3">SYSTEM-PROMPTS: DIE KUNST DER KI-STEUERUNG</h2>
    <p className="text-xl md:text-2xl text-teal-400 mb-8">Die "Seele" des Systems: Präzise Anweisungen für jeden KI-Agenten</p>
    
    <div className="max-w-4xl mx-auto text-left bg-slate-800/50 p-6 md:p-8 rounded-xl border border-teal-700 shadow-xl shadow-teal-900/40">
      <p className="text-lg text-slate-300 mb-6">
        Von Experten erstellte Systemanweisungen (System Prompts) sind entscheidend für das Verhalten unserer KI-Agenten (Agent 1 für Chunking, Agent 2 für Strukturierung, Agent 3 für Analyse). Sie sind das Herzstück für qualitativ hochwertige Ergebnisse.
      </p>
      
      <h3 className="text-2xl font-semibold text-teal-300 mb-3">Hauptmerkmale unserer Prompts:</h3>
      <ul className="list-disc list-inside space-y-2 text-slate-300 text-lg mb-6">
        <li>Detaillierte und unmissverständliche Anweisungen.</li>
        <li>Klare Vorgaben für das gewünschte Ausgabeformat (z.B. JSON).</li>
        <li>Betonung von Konsistenz und logischer Interpretation.</li>
        <li>Berücksichtigung spezifischer juristischer Nuancen (z.B. Integrität von Hauptabschnitten, Generierung von H3-Überschriften, Einhaltung der Bewertungskriterien).</li>
      </ul>
      
      <div className="bg-teal-900/30 p-4 rounded-lg">
        <h4 className="text-xl font-semibold text-teal-200 mb-2">Auswirkung:</h4>
        <p className="text-slate-300">
          Gewährleistet zuverlässiges, vorhersagbares und vor allem qualitativ hochwertiges KI-Verhalten über alle Stufen der Analyse hinweg.
        </p>
      </div>
    </div>
    {/* <p className="mt-8 text-sm text-slate-500">Visualisierung: Dirigent, der ein KI-Orchester leitet, oder stilisierter Prompt-Ausschnitt.</p> */}
  </SlideWrapper>
);

// Slide 5: Feature-Highlight 1 – Das Ampelsystem
// Folie 5: Feature-Highlight 1 – Das Ampelsystem
const Slide5 = ({ isActive }) => {
  const items = [
    { color: "rose", Icon: XCircle, title: "ROT: Hohes Risiko", points: ["Kritische Klausel, potenzielle Deal-Breaker.", "Empfehlung: Ablehnen oder grundlegend überarbeiten."] },
    { color: "amber", Icon: AlertTriangle, title: "GELB: Vorsicht", points: ["Anpassungen und Präzisierungen empfohlen.", "Verhandlungspotenzial identifiziert."] },
    { color: "emerald", Icon: CheckCircle, title: "GRÜN: Geringes Risiko", points: ["Entspricht üblichen Standards, akzeptabel."] },
  ];
  return (
    <SlideWrapper isActive={isActive} bgClassName="bg-slate-950" className="text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">KLARHEIT STATT KONFUSION</h2>
      <p className="text-xl md:text-2xl text-sky-400 mb-12">Das Intuitive Ampelsystem: Risiken auf einen Blick</p>
      
      <div className="max-w-6xl w-full mx-auto p-6 md:p-8 bg-slate-800/40 rounded-xl border border-emerald-700 shadow-xl shadow-emerald-900/30 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
          {items.map(item => (
            <div key={item.color} className={`p-8 rounded-xl border-2 bg-slate-800/70 border-${item.color}-500 shadow-lg shadow-${item.color}-500/20`}>
              <item.Icon size={64} className={`mx-auto mb-6 text-${item.color}-400`} />
              <h3 className={`text-2xl font-semibold text-${item.color}-300 mb-4`}>{item.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-left">
                {item.points.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xl font-semibold text-emerald-300 text-center">Benefit: Sofortige Risikoeinschätzung – spart Zeit, Nerven und Geld.</p>
      </div>
    </SlideWrapper>
  );
};

// Slide 6: Feature-Highlight 2 – Smarte Alternativen & KI-Optimierung
// Folie 6: Feature-Highlight 2 – Smarte Alternativen & KI-Optimierung
// const Slide6 = ({ isActive }) => (
//   <SlideWrapper isActive={isActive} bgClassName="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900" className="text-center">
//     <Sparkles size={80} className="absolute top-16 left-1/2 -translate-x-1/2 text-indigo-500 opacity-30 animate-ping" />
//     <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">VOM PROBLEM ZUR OPTIMALEN LÖSUNG</h2>
//     <p className="text-xl md:text-2xl text-indigo-400 mb-12">Ihr intelligenter Partner für Vertragsgestaltung</p>
//     
//     <div className="max-w-5xl w-full mx-auto p-6 md:p-8 bg-slate-800/40 rounded-xl border border-indigo-700 shadow-xl shadow-indigo-900/30 backdrop-blur-sm">
//       <div className="grid md:grid-cols-2 gap-8 text-left text-slate-300 mb-8">
//         <div className="bg-slate-800/70 p-6 rounded-lg border border-indigo-600">
//           <h3 className="text-xl font-semibold text-indigo-300 mb-3 flex items-center"><Lightbulb size={24} className="mr-2 text-indigo-400"/>Risiko erkannt? Lösung parat!</h3>
//           <p className="text-slate-400">Für kritische Klauseln (rot/gelb) generiert unsere KI präzisere und ausgewogenere Formulierungen, basierend auf Best Practices und aktueller Rechtsprechung.</p>
//         </div>
//         <div className="bg-slate-800/70 p-6 rounded-lg border border-indigo-600">
//           <h3 className="text-xl font-semibold text-indigo-300 mb-3 flex items-center"><Cog size={24} className="mr-2 text-indigo-400"/>Optimierung unter Ihrer Kontrolle</h3>
//           <p className="text-slate-400">Geben Sie eigene Formulierungen ein oder lassen Sie Ihre Entwürfe von der KI analysieren und verfeinern – für optimale Vertragstexte.</p>
//         </div>
//       </div>
//       
//       <div className="flex justify-center items-center space-x-4 p-4 bg-slate-800/70 rounded-lg border border-indigo-600 max-w-xl mx-auto">
//           <FileText size={40} className="text-slate-500"/>
//           <ArrowRightLeft size={32} className="text-indigo-400"/>
//           <div className="relative">
//               <FileText size={40} className="text-emerald-400"/>
//               <Sparkles size={20} className="absolute -top-1 -right-1 text-indigo-300"/>
//           </div>
//           <p className="text-lg text-slate-300">Original Klausel <ArrowRightLeft size={16} className="inline mx-1"/> KI-Optimierte Klausel</p>
//       </div>
//     </div>
//   </SlideWrapper>
// );

// Slide 7: Die Wissensbasis
// Folie 7: Die Wissensbasis
const Slide7 = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-slate-900" className="text-center">
    <Library size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-600/10 opacity-50" style={{filter: 'blur(15px)'}}/>
    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">FUNDIERTES WISSEN ALS BASIS</h2>
    <p className="text-xl md:text-2xl text-sky-400 mb-10">Die juristische Expertise hinter unserer KI</p>
    
    <div className="max-w-4xl w-full mx-auto p-6 md:p-8 bg-slate-800/40 rounded-xl border border-sky-700 shadow-xl shadow-sky-900/30 backdrop-blur-sm">
      <p className="text-lg text-slate-300 mb-6 text-left">Unsere KI basiert auf einer sorgfältig entwickelten Wissensgrundlage:</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-none p-0">
        {[
          "Deutsches & Österreichisches Vertragsrecht.",
          "Branchenspezifische Klauselbewertungen (Bau & Immobilien).",
          "Aktuelle Gerichtsentscheidungen und Gesetzesänderungen.",
          "Expertenwissen und anerkannte Best Practices.",
          "Semantisches Verständnis für präzise Kontextanalyse.",
          "Kontinuierliche Aktualisierung und Erweiterung der Datenbasis."
        ].map(item => (
          <li key={item} className="flex items-start p-3 bg-slate-800/50 rounded-md border border-slate-700 hover:border-sky-600 transition-colors">
            <CheckCircle size={20} className="text-sky-400 mr-3 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </SlideWrapper>
);

// Slide 8: Technische Exzellenz
// Folie 8: Technische Exzellenz
const Slide8 = ({ isActive }) => {
  const coreTech = [
    { name: "Google Gemini Pro", category: "KI: Tiefenanalyse, Strukturierung", icon: <BrainCircuit size={20}/>, color: "text-emerald-400" },
    { name: "Google Gemini Flash", category: "KI: Schnelle Analyse, RAG", icon: <BrainCircuit size={20}/>, color: "text-sky-400" },
    { name: "Google Text Embedding", category: "KI: Semantisches Verständnis", icon: <BrainCircuit size={20}/>, color: "text-blue-400" },
  ];
  const backendTech = [
    { name: "Convex Platform", category: "Serverless Backend & DB", icon: <ServerIcon size={20}/>, color: "text-purple-400" },
    { name: "Convex: Real-time DB", category: "Datenbank", icon: <Database size={20}/>, color: "text-purple-300" },
    { name: "Convex: Vector Search", category: "RAG Wissensbasis", icon: <Search size={20}/>, color: "text-purple-300" }, // Will need Search icon if not present
  ];
  const frontendTech = [
    { name: "Next.js", category: "Frontend & API Layer", icon: <Code size={20}/>, color: "text-slate-300" },
    { name: "React", category: "UI Komponenten", icon: <Palette size={20}/>, color: "text-sky-300" },
    { name: "Tailwind CSS", category: "Styling", icon: <Layers size={20}/>, color: "text-teal-400" },
  ];
  const principles = ["Skalierbarkeit", "Sicherheit", "Echtzeitfähigkeit", "Zukunftssicherheit"];

  return (
    <SlideWrapper isActive={isActive} bgClassName="bg-gradient-to-bl from-slate-900 via-purple-950 to-slate-900" className="text-center">
      <Settings size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500/10 opacity-50 animate-spin-slow" style={{filter: 'blur(10px)'}}/>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">TECHNOLOGIE & ARCHITEKTUR</h2>
      <p className="text-xl md:text-2xl text-purple-400 mb-10">Die Symphonie aus fortschrittlicher KI und Cloud-Nativer Architektur</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-8">
        <div>
          <h3 className="text-2xl font-semibold text-emerald-300 mb-4">Kern-KI-Engine</h3>
          {coreTech.map(t => (
            <div key={t.name} className="mb-3 p-3 bg-slate-800/70 rounded-lg border border-purple-700 flex items-center hover:shadow-md hover:shadow-purple-600/30 transition-shadow">
              <div className={`mr-3 p-2 rounded-md bg-slate-700 ${t.color}`}>{React.cloneElement(t.icon, { size: 24 })}</div>
              <div>
                <h4 className={`font-semibold ${t.color}`}>{t.name}</h4>
                <p className="text-xs text-slate-500">{t.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">Backend-Kraftpaket</h3>
          {backendTech.map(t => (
            <div key={t.name} className="mb-3 p-3 bg-slate-800/70 rounded-lg border border-purple-700 flex items-center hover:shadow-md hover:shadow-purple-600/30 transition-shadow">
              <div className={`mr-3 p-2 rounded-md bg-slate-700 ${t.color}`}>{React.cloneElement(t.icon, { size: 24 })}</div>
              <div>
                <h4 className={`font-semibold ${t.color}`}>{t.name}</h4>
                <p className="text-xs text-slate-500">{t.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">Intuitives Frontend</h3>
          {frontendTech.map(t => (
            <div key={t.name} className="mb-3 p-3 bg-slate-800/70 rounded-lg border border-purple-700 flex items-center hover:shadow-md hover:shadow-purple-600/30 transition-shadow">
              <div className={`mr-3 p-2 rounded-md bg-slate-700 ${t.color}`}>{React.cloneElement(t.icon, { size: 24 })}</div>
              <div>
                <h4 className={`font-semibold ${t.color}`}>{t.name}</h4>
                <p className="text-xs text-slate-500">{t.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {principles.map(p => (
          <div key={p} className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500">
            {p}
          </div>
        ))}
      </div>
      {/* <p className="mt-6 text-sm text-slate-500">Spezifische Modelle (GPT-4 Turbo, Gemini text-embedding-004 etc.) unterstreichen technische Tiefe.</p> */}
    </SlideWrapper>
  );
};

// NEU: Slide Architekturbild
const SlideArchitektur = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-slate-950" className="text-center">
    <Network size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/5 opacity-50 animate-pulse" style={{filter: 'blur(10px)'}}/>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-3">ARCHITEKTURÜBERBLICK</h2>
    <p className="text-xl md:text-2xl text-blue-400 mb-8">Skalierbar, Robust, Echtzeitfähig</p>

    <div className="max-w-5xl mx-auto p-4 bg-slate-800/50 rounded-xl border border-blue-700 shadow-xl shadow-blue-900/30">
      {/* This is a conceptual representation. A real diagram would be an SVG or image. */}
      <div className="space-y-5">
        {/* Frontend */}
        <div className="p-4 bg-slate-700/50 rounded-lg text-center border border-slate-600">
          <h3 className="text-xl font-semibold text-sky-300 flex items-center justify-center"><Code size={24} className="mr-2"/>Frontend (Next.js, React, Tailwind)</h3>
          <p className="text-sm text-slate-400">Benutzeroberfläche, Interaktionslogik</p>
        </div>

        <div className="text-center"><ArrowRightLeft size={24} className="text-blue-400 rotate-90 mx-auto" /></div>

        {/* API Layer */}
        <div className="p-4 bg-slate-700/50 rounded-lg text-center border border-slate-600">
          <h3 className="text-xl font-semibold text-sky-400 flex items-center justify-center"><ServerIcon size={24} className="mr-2"/>API-Schicht (Next.js / Convex Actions)</h3>
          <p className="text-sm text-slate-400">Verarbeitet Client-Anfragen, orchestriert Backend-Prozesse</p>
        </div>

        <div className="text-center"><ArrowRightLeft size={24} className="text-blue-400 rotate-90 mx-auto" /></div>

        {/* Convex Backend */}
        <div className="p-4 bg-purple-700/30 rounded-lg border border-purple-600">
          <h3 className="text-xl font-semibold text-purple-300 mb-2 text-center flex items-center justify-center"><ServerIcon size={24} className="mr-2"/>Convex Backend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="p-2 bg-purple-600/40 rounded text-center">
              <Database size={20} className="mx-auto mb-1 text-purple-200"/>
              <p className="font-medium text-purple-200">Real-time DB</p>
              <p className="text-xs text-purple-400">Verträge, Chunks, Analysen, Vektoren</p>
            </div>
            <div className="p-2 bg-purple-600/40 rounded text-center">
              <Cog size={20} className="mx-auto mb-1 text-purple-200"/>
              <p className="font-medium text-purple-200">Actions & Mutations</p>
              <p className="text-xs text-purple-400">KI-Aufrufe, Geschäftslogik</p>
            </div>
            <div className="p-2 bg-purple-600/40 rounded text-center">
              <Search size={20} className="mx-auto mb-1 text-purple-200"/>
              <p className="font-medium text-purple-200">Vector Search</p>
              <p className="text-xs text-purple-400">RAG für Wissensbasis</p>
            </div>
          </div>
        </div>

        <div className="text-center"><ArrowRightLeft size={24} className="text-blue-400 rotate-90 mx-auto" /></div>
        
        {/* Google Gemini API */}
        <div className="p-4 bg-emerald-700/30 rounded-lg text-center border border-emerald-600">
          <h3 className="text-xl font-semibold text-emerald-300 flex items-center justify-center"><BrainCircuit size={24} className="mr-2"/>Google Gemini API</h3>
          <p className="text-sm text-slate-400">Kernintelligenzschicht (Pro, Flash, Embeddings)</p>
        </div>
      </div>
      {/* <p className="mt-6 text-xs text-center text-slate-500">Pfeile illustrieren den primären Datenfluss und die Interaktionsebenen.</p> */}
    </div>
  </SlideWrapper>
);

// Slide 9: Der Mehrwert
// Folie 9: Der Mehrwert
const Slide9 = ({ isActive }) => {
  const benefits = [
    { icon: ShieldCheck, title: "Risikominimierung", text: "Teure Rechtsstreitigkeiten & Haftungsfallen proaktiv vermeiden." },
    { icon: TrendingUp, title: "Effizienzsteigerung", text: "Vertragsprüfungsprozesse um bis zu 90% beschleunigen." },
    { icon: BarChart3, title: "Kostenreduktion", text: "Anwalts- & Beratungskosten signifikant senken." },
    { icon: Handshake, title: "Verhandlungsstärke", text: "Selbstbewusst in Verhandlungen mit fundierten Analysen." },
    { icon: ScaleIcon, title: "Compliance-Sicherheit", text: "Einhaltung gesetzlicher Vorgaben & interner Richtlinien." },
    { icon: Rocket, title: "Wettbewerbsvorteil", text: "Schnellere, sicherere und profitablere Projekte realisieren." },
  ];
  return (
    <SlideWrapper isActive={isActive} bgClassName="bg-slate-900" className="text-center">
      <Building size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-600/5 opacity-80" style={{filter: 'blur(10px)'}}/>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">MEHR ALS NUR SOFTWARE</h2>
      <p className="text-xl md:text-2xl text-emerald-400 mb-10">Ein strategischer Vorteil für Ihr Unternehmen</p>
      
      <div className="max-w-6xl w-full mx-auto p-6 md:p-8 bg-slate-800/40 rounded-xl border border-emerald-700 shadow-xl shadow-emerald-900/30 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(b => (
            <div key={b.title} className="p-6 bg-slate-800/70 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors hover:shadow-lg hover:shadow-emerald-600/20 transform hover:scale-105">
              <b.icon size={36} className="text-emerald-400 mb-3" />
              <h3 className="text-xl font-semibold text-slate-100 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-400">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

// Slide 10: Unsere Reise
// Folie 10: Unsere Reise
const Slide10 = ({ isActive }) => (
  <SlideWrapper isActive={isActive} bgClassName="bg-gradient-to-br from-slate-800 via-slate-950 to-orange-900/80" className="text-center">
    <Award size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500/10 opacity-70 animate-pulse" style={{filter: 'blur(15px)'}}/>
    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">VON DER IDEE ZUM PROTOTYP</h2>
    <p className="text-xl md:text-2xl text-orange-400 mb-10">Entwickelt im Rahmen des KI Con | Hackathon 2025</p>
    <div className="max-w-3xl w-full mx-auto p-6 md:p-8 bg-slate-800/40 rounded-xl border border-orange-700 shadow-xl shadow-orange-900/40 backdrop-blur-sm text-lg text-slate-300">
      <div className="space-y-6">
        <p><strong className="text-orange-300">Ausgangspunkt:</strong> Die Herausforderung "Verhandlungsprofi" und die automatisierte Prüfung von AGBs/Bauverträgen.</p>
        <p><strong className="text-orange-300">Entwicklung:</strong> In Kooperation mit Praxispartnern – von der Theorie zur anwendbaren Lösung.</p>
        <p><strong className="text-orange-300">Ergebnis:</strong> Ein Konzept, das für seine innovative und praxisrelevante Herangehensweise Anerkennung fand.</p>
        <p><strong className="text-orange-300">Motivation:</strong> Reale Herausforderungen der Bau- und Projektpraxis mit KI-Unterstützung meistern.</p>
      </div>
      <blockquote className="mt-8 p-4 border-l-4 border-orange-500 bg-slate-800/50 text-slate-400 italic text-sm">
        Auszug aus der Hackathon-Challenge: Innovative Lösungen für reale Probleme der Baubranche entwickeln.
      </blockquote>
    </div>
  </SlideWrapper>
);

// Slide 11: Die Vision
// Folie 11: Die Vision
const Slide11 = ({ isActive }) => {
  const visionPoints = [
    "Integration weiterer Rechtsordnungen (Schweiz, EU-Recht).",
    "Finetuning der KI-Modelle für präzisere Analysen.",
    "Umfassende Vertragsmanagement-Funktionen.",
    "Kollaborative Vertragsbearbeitung in Echtzeit.",
    "Predictive Analytics für Vertragsrisiken.",
  ];
  return (
    <SlideWrapper isActive={isActive} bgClassName="bg-gradient-to-tl from-sky-950 via-slate-900 to-purple-900" className="text-center">
      <Globe size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500/5 opacity-60 animate-spin-slow" style={{filter: 'blur(10px)'}}/>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">DIE REISE GEHT WEITER</h2>
      <p className="text-xl md:text-2xl text-purple-400 mb-10">Wir gestalten die Zukunft des Vertragsmanagements</p>
      <div className="max-w-3xl text-left">
        <h3 className="text-xl font-semibold text-slate-200 mb-4">Geplante Erweiterungen:</h3>
        <ul className="space-y-3">
          {visionPoints.map(point => (
            <li key={point} className="flex items-center text-slate-300 p-3 bg-slate-800/50 rounded-md border border-slate-700 hover:border-purple-500 transition-colors">
              <Zap size={18} className="text-purple-400 mr-3 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-2xl font-semibold text-center text-purple-300">
          Unser Ziel: Die führende Plattform für intelligentes Vertragsmanagement in der Bau- und Immobilienbranche.
        </p>
      </div>
    </SlideWrapper>
  );
};

// Slide 12: Call to Action / Vielen Dank!
// Folie 12: Call to Action / Vielen Dank!
const Slide12 = ({ isActive }) => (
  <SlideWrapper 
    isActive={isActive} 
    bgClassName="bg-gradient-to-br from-sky-900 via-slate-950 to-indigo-950" // Darker background like Slide 1
    className="flex flex-col items-center justify-center p-4 md:p-8"
  >
    {/* Decorative background elements - more subtle for darker theme */}
    <div className="absolute inset-0 overflow-hidden -z-10">
      <BrainCircuit size={130} className="absolute -top-1/4 -left-1/4 text-sky-700/5 opacity-20 animate-pulse" style={{filter: 'blur(18px)', animationDuration: '10s'}} />
      <Rocket size={110} className="absolute -bottom-1/3 right-0 text-emerald-700/5 opacity-20 animate-pulse delay-1s" style={{filter: 'blur(16px)', transform: 'rotate(-15deg) scale(1)', animationDuration: '12s'}} />
      <Sparkles size={160} className="absolute top-1/3 -right-1/4 text-indigo-600/3 opacity-10 animate-ping delay-2s" style={{filter: 'blur(20px)', animationDuration: '14s'}}/>
    </div>
    
    {/* Main 50/50 Split Container */}
    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center flex-grow gap-6 md:gap-10">
      {/* Left Column: Text Content */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-sky-300 to-emerald-400 mb-4 md:mb-5 leading-tight">
          DIE KI-REVOLUTION FÜR IHR UNTERNEHMEN.
        </h2>
        {/* Justified text for the main paragraph */}
        <p className="text-md md:text-lg text-slate-300 mb-5 md:mb-6 max-w-xl leading-relaxed text-justify" style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
          Sie haben gesehen, wie KI komplexe Herausforderungen lösen kann. Lassen Sie uns gemeinsam entdecken, wie <strong className="font-semibold text-sky-400">maßgeschneiderte KI-Lösungen</strong> auch Ihre <strong className="font-semibold text-sky-400">Geschäftsprozesse transformieren</strong>, <strong className="font-semibold text-emerald-400">Effizienz steigern</strong> und <strong className="font-semibold text-emerald-400">neue Wachstumspotenziale erschließen</strong> können – egal in welcher Branche.
        </p>
        
        <div className="mb-5 md:mb-6 text-center md:text-left">
          <p className="text-lg md:text-xl text-sky-300 font-semibold mb-3">Bereit für den nächsten Schritt?</p>
          <a href="http://gemdynamics-form.vercel.app/" target="_blank" rel="noopener noreferrer" 
             className="inline-block px-7 py-2.5 bg-gradient-to-r from-sky-600 via-emerald-600 to-emerald-700 hover:from-sky-700 hover:via-emerald-700 hover:to-emerald-800 text-white font-bold rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-md md:text-lg focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-40"
          >
            Jetzt Kontakt aufnehmen
          </a>
          <p className="text-xs text-slate-400 mt-2.5">Ihr Weg zur KI-gestützten Zukunft beginnt hier.</p>
        </div>

        {/* Footer-like area within the left column - substantially reduced */}
        <div className="mt-auto pt-3 text-center md:text-left w-full">
          {/* <p className="text-sm text-slate-400 mb-2">Vielen Dank für Ihre Aufmerksamkeit!</p> */}
          {/* <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-1.5 sm:space-y-0 sm:space-x-5 text-slate-300 mb-3 text-xs">
            <a href="mailto:info@gemdynamics.de" className="flex items-center hover:text-emerald-400 transition-colors">
              <Mail size={16} className="mr-1.5" /> info@gemdynamics.de
            </a>
            <a href="http://gemdynamics-form.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-emerald-400 transition-colors">
              <Globe size={16} className="mr-1.5" /> gemdynamics-form.vercel.app
            </a>
          </div> */}
          {/* <p 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 animate-pulse"
            style={{animationDuration: '3.5s', textShadow: '0 0 7px rgba(100, 200, 255, 0.15), 0 0 12px rgba(100, 200, 255, 0.1)'}}
          >
            FRAGEN?
          </p> */}
        </div>
      </div>

      {/* Right Column: Real QR Code - Made larger */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-2 md:p-0 mt-4 md:mt-0">
        <div className="p-3 bg-slate-100/90 rounded-lg shadow-2xl hover:shadow-sky-500/40 transition-all duration-300 ease-in-out transform hover:scale-105">
          <QRCodeCanvas 
            value="http://gemdynamics-form.vercel.app/" 
            size={320} // Increased QR code size
            bgColor="transparent" 
            fgColor="#1e293b" 
            level="H" 
          />
        </div>
        <p className="mt-3 md:mt-4 text-md md:text-lg text-center text-sky-200 font-medium">
          Scannen & Kontakt aufnehmen
        </p>
        <p className="text-xs text-slate-400 text-center max-w-xs mt-1">
          Direkter Draht zu unserem Kontaktformular für Demo-Anfragen, Infos und mehr.
        </p>
      </div>
    </div>
  </SlideWrapper>
);


const slides = [
  { id: 1, component: Slide1, name: "Titel" },
  { id: 2, component: Slide2, name: "Herausforderung" },
  { id: 3, component: Slide3, name: "Lösung" },
  { id: 4, component: Slide4, name: "Funktionsweise" },
  { id: 5, component: SlideDeepDive1Kartographie, name: "KI-Kartographie" },
  { id: 6, component: SlideDeepDive2Strukturierung, name: "KI-Strukturierung" },
  { id: 7, component: SlideDeepDive3AnalyseRAG, name: "KI-Analyse & RAG" },
  { id: 8, component: SlideSystemPrompts, name: "KI-System Prompts" },
  { id: 9, component: Slide5, name: "Ampelsystem" },
  { id: 10, component: Slide10, name: "Unsere Reise" },
  { id: 11, component: Slide7, name: "Wissensbasis" },
  { id: 12, component: Slide8, name: "Technologie & Architektur" },
  { id: 13, component: SlideArchitektur, name: "Architekturüberblick" },
  { id: 14, component: Slide9, name: "Mehrwert" },
  { id: 15, component: Slide11, name: "Vision" },
  { id: 16, component: Slide12, name: "Kontakt" },
];

// Main App Component
// Haupt-App-Komponente
const App = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'Backspace' || event.key === 'PageUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);
  
  // Fügt bei Bedarf grundlegendes CSS für globale Stile hinzu, z.B. für @keyframes
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    // Globale Stile und Animationen
    styleSheet.innerText = `
      body { margin: 0; background-color: #0F172A; font-family: 'Inter', sans-serif; } /* bg-slate-900 */
      .animate-spin-slow { animation: spin 10s linear infinite; }
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      // Aufräumen, wenn die Komponente unmountet wird
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);


  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-slate-100 font-['Inter',_sans-serif]">
      <Helmet /> {/* Für Inter-Schriftart und Tailwind */}
      
      {/* Rendert alle Folien, SlideWrapper behandelt Sichtbarkeit und Übergänge */}
      {slides.map((slide, index) => {
        const SlideComponent = slide.component;
        return <SlideComponent key={slide.id} isActive={index === currentSlideIndex} />;
      })}

      {/* Navigationsschaltflächen */}
      <button
        onClick={prevSlide}
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="Vorherige Folie" // German label
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="Nächste Folie" // German label
      >
        <ChevronRight size={28} />
      </button>

      {/* Folienzähler */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/30 text-slate-300 text-xs sm:text-sm rounded-full backdrop-blur-sm">
        {currentSlideIndex + 1} / {slides.length}  <span className="hidden sm:inline">- {slides[currentSlideIndex].name}</span>
      </div>
    </div>
  );
};

// Helper component to load Tailwind and Inter font
// Hilfskomponente zum Laden von Tailwind und der Inter-Schriftart
const Helmet = () => {
  useEffect(() => {
    // Sicherstellen, dass Skripte und Links nicht mehrfach hinzugefügt werden
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      const tailwindScript = document.createElement('script');
      tailwindScript.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(tailwindScript);
    }

    if (!document.querySelector('link[href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"]')) {
      const interFontLink = document.createElement('link');
      interFontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
      interFontLink.rel = "stylesheet";
      document.head.appendChild(interFontLink);
    }
    
    // Die Bereinigungsfunktion ist hier möglicherweise nicht ideal, da Tailwind und die Schriftart global benötigt werden.
    // Das Entfernen könnte zu Problemen führen, wenn die Komponente (unwahrscheinlich für Helmet an der Wurzel) entfernt und wieder hinzugefügt wird.
    // return () => {
      // document.head.removeChild(tailwindScript); 
      // document.head.removeChild(interFontLink);
    // };
  }, []);
  return null; 
};


export default App;

