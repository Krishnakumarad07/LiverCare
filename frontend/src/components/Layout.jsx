import React from 'react';
import Sidebar from './Sidebar';
import { LeafDecoration } from './Illustrations';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#EEF6F6] via-[#F0F8F8] to-[#F5F9FA] text-slate-800 relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto scrollbar-thin min-h-screen">
        {/* Subtle top-right decorative leaf */}
        <LeafDecoration className="top-0 right-0 w-52 h-52 opacity-20 rotate-180" />

        {/* Bottom-right leaf */}
        <LeafDecoration className="bottom-0 right-0 w-44 h-44 opacity-30" />

        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
             style={{
               backgroundImage: `radial-gradient(circle, #14919B 1px, transparent 1px)`,
               backgroundSize: '28px 28px'
             }}
        />

        {/* Scrollable page content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 py-6 lg:py-8 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}
