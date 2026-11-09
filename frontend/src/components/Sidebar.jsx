import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, UserCircle2, Activity, FileBarChart, Heart } from 'lucide-react';
import { LeafDecoration } from './Illustrations';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Patient Details', path: '/patient-details', icon: UserCircle2 },
  { name: 'Prediction', path: '/prediction', icon: Activity },
  { name: 'Reports & History', path: '/reports', icon: FileBarChart },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sticky top-0 h-screen w-[260px] min-w-[260px] bg-white border-r border-slate-100/80 flex flex-col justify-between z-30 shadow-[1px_0_12px_rgba(0,0,0,0.03)] select-none">
      {/* ─── Brand Header ─── */}
      <div>
        <div className="px-6 pt-7 pb-5">
          <div className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md shadow-teal-700/20 relative">
              <Heart className="w-5 h-5 text-white fill-white/30" strokeWidth={2.2}/>
              {/* Medical cross overlay */}
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white border border-teal-200 flex items-center justify-center">
                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                  <path d="M5 2V8M2 5H8" stroke="#0D7377" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-[17px] font-extrabold tracking-tight leading-none">
                <span className="text-teal-700">Liver</span>
                <span className="text-teal-600">Care</span>
                <span className="text-slate-400 font-bold ml-0.5 text-sm">AI</span>
              </h1>
              <p className="text-[10px] font-semibold text-slate-400 mt-1 tracking-[0.15em] uppercase">
                Predict · Care · Live Healthy
              </p>
            </div>
          </div>
        </div>

        {/* ─── Navigation ─── */}
        <nav className="mt-2 px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[13px] transition-all duration-200 relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-700/20 font-semibold'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 rounded-r-full"/>
                )}
                <Icon className={`w-[18px] h-[18px] flex-shrink-0 ${
                  isActive ? 'text-white' : 'text-slate-400 group-hover:text-teal-600'
                }`} strokeWidth={isActive ? 2.2 : 1.8}/>
                <span>{item.name}</span>

                {/* Active indicator dot */}
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60"/>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ─── Quick Stats Card ─── */}
        <div className="mx-5 mt-7 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-100/60">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-teal-100 flex items-center justify-center">
              <Activity className="w-3.5 h-3.5 text-teal-700"/>
            </div>
            <span className="text-xs font-bold text-teal-800">System Status</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-500">ML Model</span>
              <span className="font-semibold text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"/>Active
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-500">Algorithm</span>
              <span className="font-semibold text-slate-700">Random Forest</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-500">Accuracy</span>
              <span className="font-semibold text-slate-700">~78%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Sidebar Footer ─── */}
      <div className="relative p-5 overflow-hidden">
        <LeafDecoration className="bottom-0 left-0 w-24 h-24 opacity-25 transform -scale-x-100"/>
        <div className="relative z-10 p-3 rounded-xl bg-gradient-to-r from-teal-50/80 to-emerald-50/40 border border-teal-100/50 text-center">
          <p className="text-[11px] text-teal-700/80 font-medium leading-snug">
            Take care of your liver
            <br/>
            <span className="font-semibold text-teal-800">for a healthier tomorrow</span>{' '}
            <span className="text-teal-600">♡</span>
          </p>
        </div>
        <p className="text-[9px] text-slate-400 text-center mt-2 font-medium">
          LiverCare AI v1.0 · MCA Project
        </p>
      </div>
    </aside>
  );
}
