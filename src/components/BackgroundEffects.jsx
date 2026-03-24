import React from 'react';

export default function BackgroundEffects() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: -5s;
        }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F5B041]/10 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-rose-900/15 blur-[120px] animate-float-delayed" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-orange-900/10 blur-[120px] animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[#FDE047]/5 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>
    </>
  );
}