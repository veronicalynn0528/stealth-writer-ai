"use client";

import { useState } from "react";

export default function HeroSection() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleHumanize = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setError("");
    setOutputText("");
    
    try {
      const response = await fetch("/api/humanize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setOutputText(data.humanizedText || data.text || "No response received");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to humanize text");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-16 min-h-[819px] flex flex-col items-center justify-center text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-surface-container-low rounded-full blur-[120px] -z-10 opacity-60"></div>
      
      <div className="max-w-[680px] mx-auto space-y-12 animate-fade-in">
        {/* Label */}
        <div className="flex justify-center">
          <span className="px-4 py-1 border border-outline text-caption font-label-md tracking-widest uppercase text-on-surface-variant">
            Advanced NLP Engine
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface leading-tight tracking-tight">
          The Art of <span className="italic font-serif">Human</span> Expression, Powered by AI.
        </h1>
        
        {/* Subheadline */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[560px] mx-auto">
          Transform AI-generated content into natural, undetectable prose. Free, forever, and perfectly stealthy.
        </p>
        
        {/* Input Area */}
        <div className="w-full max-w-[600px] mx-auto mt-12 luxury-focus">
          <div className="relative flex flex-col md:flex-row items-center border-b border-outline-variant transition-all duration-500">
            <textarea 
              id="humanize-input"
              className="w-full bg-transparent border-none focus:ring-0 font-body-md text-body-md py-6 resize-none min-h-[120px] placeholder:text-outline/50"
              placeholder="Paste your AI manuscript here to begin the transformation..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="py-6 px-4 w-full md:w-auto flex justify-end">
              <button 
                className="bg-on-surface text-surface w-full md:w-auto px-10 py-4 font-label-md text-label-md tracking-widest uppercase transition-all duration-300 hover:tracking-[0.2em] active:scale-95 whitespace-nowrap disabled:opacity-50"
                onClick={handleHumanize}
                disabled={isLoading || !inputText.trim()}
              >
                {isLoading ? "Processing..." : "Humanize Text"}
              </button>
            </div>
          </div>
        </div>
        
        {/* Output Area */}
        {outputText && (
          <div className="w-full max-w-[600px] mx-auto mt-8 p-6 bg-surface-container border border-outline-variant">
            <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-4">
              Result
            </p>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed whitespace-pre-wrap">
              {outputText}
            </p>
          </div>
        )}
        
        {/* Error */}
        {error && (
          <div className="w-full max-w-[600px] mx-auto mt-4 p-4 bg-error-container border border-error">
            <p className="font-body-md text-body-md text-error">{error}</p>
          </div>
        )}
        
        {/* Mini badges */}
        <div className="flex items-center justify-center gap-8 mt-8 text-on-surface-variant/60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            <span className="text-caption font-label-md uppercase tracking-tighter">Zero Detection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span className="text-caption font-label-md uppercase tracking-tighter">Tone Preserved</span>
          </div>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="mt-24 w-full max-w-[800px] flex justify-center items-center gap-24 opacity-30">
        <div className="h-px bg-outline-variant flex-1"></div>
        <div className="w-16 h-16 border border-outline rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>edit_note</span>
        </div>
        <div className="h-px bg-outline-variant flex-1"></div>
      </div>
    </section>
  );
}
