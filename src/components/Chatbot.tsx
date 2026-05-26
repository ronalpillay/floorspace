'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-[family-name:var(--font-outfit)]">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col bg-[#151714] border border-white/10 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out origin-bottom-right">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#20231f]">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#f5f1e8] text-[#151714] flex items-center justify-center">
                <MessageCircle size={17} />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Project enquiry</h3>
                <p className="text-white/45 text-xs">Share a brief for the team</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#151714]">
            {messages.length === 0 ? (
              <div className="text-center text-white/45 text-sm mt-10">
                <p>Tell us the city, approximate area, timeline, and type of space.</p>
              </div>
            ) : (
              messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                    m.role === 'user' 
                      ? 'bg-[#f5f1e8] text-[#151714]' 
                      : 'bg-white/8 text-gray-100 border border-white/10'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/8 border border-white/10 text-gray-400 rounded-lg px-4 py-2 text-sm flex space-x-1 items-center h-9">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="p-4 bg-[#20231f] border-t border-white/10">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your brief..."
                className="w-full bg-white/8 text-white border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-[#c9ad86] transition-colors placeholder:text-white/35"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 p-2 bg-[#f5f1e8] text-[#151714] rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:hover:bg-[#f5f1e8]"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } transition-all duration-300 w-14 h-14 bg-[#151714] text-[#f5f1e8] border border-white/15 rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 z-50`}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
